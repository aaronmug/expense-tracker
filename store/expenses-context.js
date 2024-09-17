import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-02-12"),
  },
  {
    id: "e3",
    description: "PS5",
    amount: 509.99,
    date: new Date("2022-05-10"),
  },
  {
    id: "e4",
    description: "iPhone 13",
    amount: 329.99,
    date: new Date("2022-07-13"),
  },
  {
    id: "e5",
    description: "Santorini",
    amount: 1209.99,
    date: new Date("2022-12-10"),
  },
  {
    id: "e6",
    description: "iPhone 15",
    amount: 329.99,
    date: new Date("2024-09-16"),
  },
  {
    id: "e7",
    description: "Zanzibar",
    amount: 329.99,
    date: new Date("2024-09-17"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  // returns a new state value
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updateExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updateExpense = state[updateExpenseIndex];
      const updateItem = { ...updateExpense, ...action.payload.data }; // overwrite existing values and keep id
      const updatedExpenses = [...state];
      updatedExpenses[updateExpenseIndex] = updateItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData }); // type references the expensesReducer function
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;

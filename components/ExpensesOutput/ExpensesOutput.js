import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

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
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

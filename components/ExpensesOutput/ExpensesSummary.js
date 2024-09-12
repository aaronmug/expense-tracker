import { View, Text } from "react-native";

function ExpensesSummary({ expenses, periodName }) {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount; // expense is an object with an amount property
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expenseSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

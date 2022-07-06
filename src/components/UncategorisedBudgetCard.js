import React from "react";
import { UNCATEGORISED_BUDGET_ID, useBudget } from "../context/BudgetsContext";
import BudgetCard from "./BudgetCard";

function UncategorisedBudgetCard(props) {
  const { getBudgetExpenses } = useBudget();
  const amount = getBudgetExpenses(UNCATEGORISED_BUDGET_ID).reduce(
    (total, expense) => total + expense.amount,
    0
  );
  if (amount === 0) return null;
  return <BudgetCard name="Uncategorised" gray amount={amount} {...props} />;
}

export default UncategorisedBudgetCard;

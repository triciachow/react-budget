import React from "react";
import { Modal, Button, Stack } from "react-bootstrap";
import { UNCATEGORISED_BUDGET_ID, useBudget } from "../context/BudgetsContext";
import { currencyFormatter } from "../util";

function ViewExpenseModal({ budgetId, handleClose }) {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
    useBudget();
  const expenses = getBudgetExpenses(budgetId);
  const budget =
    UNCATEGORISED_BUDGET_ID === budgetId
      ? { name: "Uncategorised", id: UNCATEGORISED_BUDGET_ID }
      : budgets.find(b => b.id === budgetId);

  return (
    <Modal show={budgetId != null} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Stack direction="horizontal" gap="2">
            <div>Expenses - {budget?.name}</div>
            {budgetId !== UNCATEGORISED_BUDGET_ID && (
              <Button
                variant="outline-danger"
                onClick={() => {
                  deleteBudget(budget);
                  handleClose();
                }}
              >
                Delete
              </Button>
            )}
          </Stack>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack direction="vertical" gap="3">
          {expenses.map(expense => {
            return (
              <Stack direction="horizontal" gap="2" key={expense.id}>
                <div className="me-auto fs-4">{expense.description}</div>
                <div className="fs-5">
                  {currencyFormatter.format(expense.amount)}
                </div>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => deleteExpense(expense)}
                >
                  &times;
                </Button>
              </Stack>
            );
          })}
        </Stack>
      </Modal.Body>
    </Modal>
  );
}

export default ViewExpenseModal;

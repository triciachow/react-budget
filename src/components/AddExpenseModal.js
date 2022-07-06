import React, { useRef } from "react";
import { Form, Modal } from "react-bootstrap";
import { useBudget } from "../context/BudgetsContext";

function AddExpenseModal({ show, handleClose }) {
  const descriptionRef = useRef();
  const amountRef = useRef();
  const budgetIdRef = useRef();
  const { budgets, addExpense } = useBudget();

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control ref={descriptionRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              ref={amountRef}
              type="number"
              min={0}
              step={0.01}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="budgetId">
            <Form.Label>Budget</Form.Label>
            <Form.Select ref={budgetIdRef}>
              <option>Uncategorised</option>
              {budgets.map(budget => {
                <option key={budget.id} value={budget.id}>
                  {budget.name}
                </option>;
              })}
            </Form.Select>
          </Form.Group>
        </Modal.Body>
      </Form>
    </Modal>
  );
}

export default AddExpenseModal;

import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    
    const expenseData = {
      ...enteredExpenseData, // data inside submitHandler in the form
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);

    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(false);

  const addClickHandler = () => {
    setShowForm(true);
  };

  const cancelClickHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={addClickHandler}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          onCancel={cancelClickHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
}

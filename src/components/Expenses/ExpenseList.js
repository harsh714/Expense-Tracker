import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList(props) {
  // If FilterdItems array is empty then render

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((filteredItem) => (
        <ExpenseItem key={filteredItem.id} expense={filteredItem} />
      ))}
    </ul>
  );
}

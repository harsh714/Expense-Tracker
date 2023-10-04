import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [filterdYear, selectFilteredYear] = useState("2024");

  // Filter change handler function receiving the selected year from the ExpensesFilter component

  const filterChangeHandler = (selectedYear) => {
    selectFilteredYear(selectedYear);
  };

  // Array storing the filtered items

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterdYear;
  });

  return (
    <Card className="expenses">
      <ExpensesChart expenses = {filteredExpenses}/>
      <ExpensesFilter
        selected={filterdYear}
        onSelectChange={filterChangeHandler}
      />
      {/* {props.items.map((item) => (
        <ExpenseItem key={item.id} expense={item} />
      ))} */}

      <ExpenseList items = {filteredExpenses}/>
    </Card>

    /* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */
  );
}

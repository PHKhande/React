import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = ({ expense, setExpense, expenses }) => {
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount);

  const clickDeleteHandler = () =>
    setExpense(expenses.filter((ele) => ele.id !== expense.id));
  const clickChangeHandler = () => setTitle("Changed");
  const clickChangeAmountHandler = () => setAmount("100$");

  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <ExpenseDetails
        title={title}
        location={expense.LocationOfExpenditure}
        amount={amount}
      />
      <button onClick={clickDeleteHandler}> Delete </button>
      <button onClick={clickChangeHandler}> Change title </button>
      <button onClick={clickChangeAmountHandler}> Change amount </button>
    </Card>
  );
};

export default ExpenseItem;

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = ({ allExpenses }) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = allExpenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  console.log(filteredExpenses);

  let expenseContent = <p> No Expense Found. </p>;
  expenseContent = filteredExpenses.length === 1 && (
    <>
      <ExpenseItem key={filteredExpenses[0].id} expense={filteredExpenses[0]} />
      <p>Only single Expense here. Please add more...</p>
    </>
  );

  if (filteredExpenses.length > 1) {
    expenseContent = filteredExpenses.map((ele) => (
      <ExpenseItem key={ele.id} expense={ele} />
    ));
  }

  return (
    <Card className="expenses">
      <h1>Expense Items</h1>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseContent}
    </Card>
  );
};

export default Expenses;

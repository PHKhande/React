import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = ({allExpenses}) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <h1>Expense Items</h1>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {allExpenses.map((ele) => {
        return (
          <ExpenseItem
            key={ele.id}
            expense={ele}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;

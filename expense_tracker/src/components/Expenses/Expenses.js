import ExpenseItem from "./ExpenseItem";

import { expenses } from "../../constants/constants";

import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
const Expenses = () => {
  const [allExpenses, setAllExpenses] = useState(expenses);

  return (
    <Card className="expenses">
      <h1>Expense Items</h1>
      {allExpenses.map((ele) => {
        return (
          <ExpenseItem
            key={ele.id}
            expense={ele}
            setExpense={setAllExpenses}
            expenses={allExpenses}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;

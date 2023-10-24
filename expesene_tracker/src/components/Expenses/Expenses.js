import ExpenseItem from "./ExpenseItem";

import { expenses } from "../../constants/constants";

import './Expenses.css';
import Card from "../UI/Card";
const Expenses = () => {
  return (
    <Card className="expenses">
      <h1>Expense Items</h1>
      {expenses.map((ele) => {
        return <ExpenseItem key={ele.id} expense={ele}/>;
      })}
    </Card>
  )
}

export default Expenses;
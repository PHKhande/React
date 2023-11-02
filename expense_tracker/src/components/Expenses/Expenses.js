import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = ({allExpenses}) => {

  return (
    <Card className="expenses">
      <h1>Expense Items</h1>
      {allExpenses.map((ele) => {
        return (
          <ExpenseItem
            key={ele.id}
            expense={ele}
            // setExpense={setAllExpenses}
            expenses={allExpenses}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;

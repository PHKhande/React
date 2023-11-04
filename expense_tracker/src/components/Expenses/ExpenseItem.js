import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = ({ expense }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <ExpenseDetails
        title={expense.title}
        location={expense.LocationOfExpenditure}
        amount={expense.amount}
      />
    </Card>
  );
};

export default ExpenseItem;

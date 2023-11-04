import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
  const Month = date.toLocaleString("en-US", { month: "long" });
  const Day = date.getDate();
  const Year = date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{Month}</div>
      <div className="expense-date__year">{Year}</div>
      <div className="expense-date__day">{Day}</div>
    </div>
  );
};

export default ExpenseDate;

import ExpenseItem from "./ExpenseItem";

const ExpenseLists = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }
  if (items.length === 1) {
    return (
      <>
        <ExpenseItem key={items[0].id} expense={items[0]} />
        <h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2>
      </>
    );
  }

  return (
    <ul className="expenses-list">
      {items.map((ele) => (
        <ExpenseItem key={ele.id} expense={ele} />
      ))}
    </ul>
  );
};

export default ExpenseLists;

import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 1,
      exp: "Food",
      cost: 10,
    },
    {
      id: 2,
      exp: "Movies",
      cost: 100,
    },
    {
      id: 3,
      exp: "Petrol",
      cost: 200,
    },
  ];
  return (
    <div>
      <h1>Expense Items</h1>
      {expenses.map((ele) => {
        return <ExpenseItem key={ele.id} expense={ele} />;
      })}
    </div>
  );
}

export default App;

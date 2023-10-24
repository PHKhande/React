import ExpenseItem from "./components/ExpenseItem";

import { expenses } from "./constants/constants";

function App() {
  
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

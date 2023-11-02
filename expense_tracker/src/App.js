import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { expenses } from "./constants/constants";

function App() {
  const [allExpenses, setAllExpenses] = useState(expenses);

  const addExpenseHandler = (expenseData) => {setAllExpenses((prev) => {return [...prev, expenseData]})};
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses allExpenses={allExpenses}/>
    </>
  );
}

export default App;

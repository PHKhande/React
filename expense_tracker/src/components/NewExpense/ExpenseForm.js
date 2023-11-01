import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const changeTitleHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const changeAmountHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setAmount(e.target.value);
  };

  const changeDateHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setDate(e.target.value);
  };

  const changeLocationHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setLocation(e.target.value);
  };

  return (
    <form>
      <div className="new-expense__control">
        <label className="new-expense__controls">Title</label>
        <input value={title} onChange={changeTitleHandler} />
        <label className="new-expense__controls">Amount</label>
        <input
          value={amount}
          onChange={changeAmountHandler}
          type="number"
          min={0}
          step={1}
        />
        <label
          className="new-expense__controls"
          min="2019-01-01"
          max="2023-12-31"
        >
          Date
        </label>
        <input value={date} onChange={changeDateHandler} type="date" />
        <label className="new-expense__controls">Location</label>
        <input value={location} onChange={changeLocationHandler} />
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add </button>
      </div>
    </form>
  );
};

export default ExpenseForm;

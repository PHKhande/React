import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");

  const changeTitleHandler = (e) => setEnteredTitle(e.target.value);
  const changeAmountHandler = (e) => setEnteredAmount(e.target.value);
  const changeDateHandler = (e) => setEnteredDate(e.target.value);
  const changeLocationHandler = (e) => setEnteredLocation(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ enteredTitle, enteredAmount, enteredDate, enteredLocation });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="new-expense__control">
        <label className="new-expense__controls">Title</label>
        <input value={enteredTitle} onChange={changeTitleHandler} />
        <label className="new-expense__controls">Amount</label>
        <input
          value={enteredAmount}
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
        <input value={enteredDate} onChange={changeDateHandler} type="date" />
        <label className="new-expense__controls">Location</label>
        <input value={enteredLocation} onChange={changeLocationHandler} />
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add </button>
      </div>
    </form>
  );
};

export default ExpenseForm;

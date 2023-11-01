import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem = ({expense, setExpense, expenses}) => {

  const clickHandler = (e) => {
    e.preventDefault();
    setExpense(expenses.filter((ele) => ele.id !== expense.id));
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date = {expense.date}/>
      <ExpenseDetails title={expense.title} location={expense.LocationOfExpenditure} amount={expense.amount}/>
      <button onClick={clickHandler}> Delete </button>

    </Card>
  )
};

export default ExpenseItem;
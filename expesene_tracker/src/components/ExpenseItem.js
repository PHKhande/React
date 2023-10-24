import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = ({expense}) => {
  return (
    <div className='expense-item'>
      <ExpenseDate date = {expense.date}/>
      <ExpenseDetails title={expense.title} location={expense.LocationOfExpenditure} amount={expense.amount}/>
    </div>
  )
};

export default ExpenseItem;
import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = ({expense}) => {
  // const Month = expense.date.getMonth() + 1;
  // const Day = expense.date.getDate();
  // const Year = expense.date.getFullYear();
  const Year = expense.date.toISOString();

  return (
    <div className='expense-item'>
      <div>
        {/* <div>{Day}</div>
        <div>{Month}</div> */}
        <div>{Year}</div>
      </div>

      <div className='expense-item__description'>
        <h2>{expense.title}</h2>
        <h2>{expense.LocationOfExpenditure}</h2>
        <div className='expense-item__price'>{expense.amount}</div>
      </div>
    </div>
  )
};

export default ExpenseItem;
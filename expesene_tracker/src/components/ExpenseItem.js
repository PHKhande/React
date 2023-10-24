import React from 'react'

const ExpenseItem = ({expense}) => {
  return <h2>{expense.exp} - {expense.cost}</h2>
}

export default ExpenseItem;
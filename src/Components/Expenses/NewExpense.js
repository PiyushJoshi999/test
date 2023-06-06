// import React from 'react';
// import ExpenseForm from './ExpenseForm';

// const NewExpense = (props) => {
//     const saveExpenseDataHandler = (enteredExpenseData) => {
//         const expenseData = {
//             ...enteredExpenseData,
//             id : Math.random().toString()

//         };
//         props.onAddExpense(expenseData);

//     };
//     return (
//         <div className='new-expense'>
//              <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm>
//         </div>
       
//     );

// }
// export default NewExpense;

import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseItem from '../ExpenseItem';
import ExpenseFilter from '../ExpenseFilter';
import ExpensesChart from '../ExpensesChart';

const NewExpense = () => {
  const [expenseData, setExpenseData] = useState([]);
  const[filteredYear, setFilteredYear] = useState('');

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setExpenseData([newExpenseData]);
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenseData.filter((expense) => {
    if (filteredYear === '') {
      return true; // Return all expenses if no filter is selected
    }
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No match found.</p>

  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date.toLocaleString()}
      />
    ));
  }

  return (
    <div>
       <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
       <ExpenseFilter selected = {filteredYear} onChange = {filterChangeHandler}  />
       <ExpensesChart expenses = {filteredExpenses} />
      {expensesContent}
     </div>

  );
};

export default NewExpense;

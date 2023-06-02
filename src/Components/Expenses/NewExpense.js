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
import ExpenseForm from './Expenses/ExpenseForm';
import ExpenseItem from './src/Components/ExpenseItem';
import ExpenseFilter from './src/Components/ExpenseFilter';

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

  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      <ExpenseFilter selected = {filteredYear} onChange = {filterChangeHandler}  />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default NewExpense;

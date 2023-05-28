
import React, { useState } from 'react';
import ExpenseItem from './Components/ExpenseItem';

const App = () => {
  const expenses = [
    { title: 'Car Insurance', amount: 399, location: 'Car', date: new Date(2023, 4, 24) },
    { title: 'Toilet paper', amount: 100, location: 'Home', date: new Date(2023, 4, 23) },
    { title: 'Toothpaste', amount: 150, location: 'Care', date: new Date(2023, 4, 22) },
    { title: 'Dryfruits', amount: 500, location: 'Kitchen', date: new Date(2023, 4, 20) }
  ];

  const [expenseItems, setExpenseItems] = useState(expenses);

  const deleteExpenseItem = (index) => {
    const updatedItems = [...expenseItems];
    updatedItems.splice(index, 1);
    setExpenseItems(updatedItems);
  };

  return (
    <div>
      <h2>Lets get started</h2>
      {expenseItems.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          location={expense.location}
          amount={expense.amount}
          date={expense.date}
          onDelete={() => deleteExpenseItem(index)}
        />
      ))}
    </div>
  );
};

export default App;

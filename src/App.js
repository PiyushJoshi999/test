
import React from 'react';
//import Expenses from './Components/Expenses';
import NewExpense from './Components/Expenses/NewExpense';
const App = () => {
  // const dummyExpenses = [
  //   { id : 'e1', title: 'Car Insurance', amount: 399, date: new Date(2022, 4, 24) },
  //   { id : 'e2', title: 'Toilet paper', amount: 99, date: new Date(2022, 4, 23) },
  //   { id : 'e3', title: 'Toothpaste', amount: 150, date: new Date(2021, 4, 22) },
  //   { id : 'e4', title: 'Dryfruits', amount: 500, date: new Date(2020, 4, 20) }
  // ];

  // // const [expenseItems, setExpenseItems] = useState(expenses);

  // // const deleteExpenseItem = (index) => {
  // //   const updatedItems = [...expenseItems];
  // //   updatedItems.splice(index, 1);
  // //   setExpenseItems(updatedItems);
  // // };
   
  // const [expenses, setExpenses] = useState(dummyExpenses)
  // const addExpenseHandler = (expense) => {
  //  setExpenses((prevExpenses) => {
  //   return [expense, ...prevExpenses]
  //  });
  // }

  // return (
  //   <div>
  //     <h2>Add your expense:</h2>
  //     <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
  //     <Expenses items = {expenses}></Expenses>
  //   </div>
  // );

  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpense />
    </div>
  );
};

export default App;

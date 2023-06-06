
//import ExpenseDate from './ExpenseDate';
//import ExpenseDetails from './ExpenseDetails';
//import React, {useState} from 'react';

//const ExpenseItem = (props) => {
    // const expenseDate = new Date(2023, 4, 24);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 399;
    // const locationOfExpenditure = 'Lifestyle';


    // const [title, setTitle] = useState(props.title);
    // const clickHandler = () => {
    //  setTitle('Updated!');
    //  console.log(title);
    // }

    // const [amount, setAmount] = useState(props.amount);
    // const updateAmount = () => {
    //     setAmount(100);
    //     console.log(amount);
    // }
    

    // return (
    // <div className='expense-item'>
    //     <div className='expense-item__control'>
    // <ExpenseDetails title = {props.title} amount = {props.amount}></ExpenseDetails>
    // <ExpenseDate date = {props.date}></ExpenseDate>
    //     </div>
    // </div>
    // );

//return (

    // <div className='expense-item'>
    
    // <ExpenseDate date ={props.date} />
    
    // <div>
    
    // <h1>
    
    // Expense 1
    
    // </h1>
    
    // <h1>
    
    // Expense 1
    
    // </h1>
    
    // </div>
    
    // <div>
    // return React.createElement('div', {className: expense-item},
    //        React.createElement('ExpenseDate', {date: props.date},
    //        React.createElement('div', {}, 
    //        React.createElement('h1', {}, "Expense 1",
    //        React.createElement('h1', {}, "Expense 1"))) ));
    
    
//}

//export default ExpenseItem;


import React from 'react';

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <div>Amount: ${amount}</div>
        <div>Date: {date}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;

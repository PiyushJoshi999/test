import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import React from 'react';

const ExpenseItem = (props) => {
    // const expenseDate = new Date(2023, 4, 24);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 399;
    // const locationOfExpenditure = 'Lifestyle';

    

    return (<div className='expense-item'>
    <h2>Expense Item!</h2>
    
    <ExpenseDate date = {props.date}></ExpenseDate>
    
   <ExpenseDetails title = {props.title} amount = {props.amount} location = {props.location}></ExpenseDetails>

    </div>
    );

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
    
    
}

export default ExpenseItem;
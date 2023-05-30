import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import React, {useState} from 'react';

const ExpenseItem = (props) => {
    // const expenseDate = new Date(2023, 4, 24);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 399;
    // const locationOfExpenditure = 'Lifestyle';


    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
     setTitle('Updated!');
     console.log(title);
    }

    const [amount, setAmount] = useState(props.amount);
    const updateAmount = () => {
        setAmount(100);
        console.log(amount);
    }
    

    return (<div className='expense-item'>
    <h2>{title}</h2>
    <ExpenseDate date = {props.date}></ExpenseDate>
   <ExpenseDetails  amount = {props.amount} location = {props.location}></ExpenseDetails>
   <button onClick = {clickHandler}>Change Title</button>
   <button onClick={props.onDelete}>Delete Component</button>
   <button onClick= {updateAmount}>Update Amount</button>
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
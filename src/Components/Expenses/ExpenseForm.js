import React, {useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    //Another way of storing user data using single state:
    // const [userInput, setUserInput] = useState({
    //     enteredTitle = '',
    //     enteredAmount = '',
    //     enteredDate = ''

    // });
    const titleHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value,
        // })
    }

    const amountHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value,
        // })
        
    }

    const dateHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value,
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }

    return (
        <form onSubmit = {submitHandler}>
            <div className='my-form'>
                <div className='my-form__title'>
                    <label >Expense Title</label>
                    <input type = 'text' value = {enteredTitle} onChange={titleHandler}></input>
                </div>
                <div className='my-form__amount'>
                    <label >Expense Amount</label>
                    <input type = 'number' min = "0.01" step = "0.01" value = {enteredAmount} onChange = {amountHandler}></input>
                </div>
                <div className='my-form__date'>
                    <label >Expense Date</label>
                    <input type = 'date' min = "2020-01-01" max = "2023-04-30" value = {enteredDate} onChange = {dateHandler}></input>
                </div>
                <div className='my-form__action'>
                    <button type = "submit">Add Expense</button>
                </div>
            </div>
        </form>
    );

}

export default ExpenseForm;
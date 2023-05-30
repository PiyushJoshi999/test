import React, {useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    return (
        <form>
            <div className='my-form'>
                <div className='my-form__title'>
                    <label >Expense Title</label>
                    <input type = 'text' onChange={titleHandler}></input>
                </div>
                <div className='my-form__amount'>
                    <label >Expense Amount</label>
                    <input type = 'number' min = "0.01" step = "0.01" onChange = {amountHandler}></input>
                </div>
                <div className='my-form__date'>
                    <label >Expense Date</label>
                    <input type = 'date' min = "2020-01-01" max = "2023-04-30" onChange = {dateHandler}></input>
                </div>
                <div className='my-form__action'>
                    <button type = "submit">Add Expense</button>
                </div>
            </div>
        </form>
    );

}

export default ExpenseForm;
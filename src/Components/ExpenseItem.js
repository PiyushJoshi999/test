import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

function ExpenseItem(props) {
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
}

export default ExpenseItem;
import './ExpenseItem.css';

function ExpenseItem(props) {
    const expenseDate = new Date(2023, 4, 24);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 399;
    const locationOfExpenditure = 'Lifestyle';
    return (<div className='expense-item'><h2>Expense Item!</h2>
    <p>Food Rs 10.</p>
    <p>Petrol Rs 100.</p>
    <p>Movies Rs 200.</p>
    <div>{props.date.toISOString()}</div>
    <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
    </div>
    </div>
    );
}

export default ExpenseItem;
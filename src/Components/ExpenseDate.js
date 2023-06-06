function ExpenseDate(props){
    // const month = props.date.toLocaleString('en-US', {month: 'long'});
    // const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    // const year = props.date.getFullYear();
    
    const date = props.date;
    return (
        <div className="expense-item__date">
            <h3>{date}</h3>
        </div>
    );

}
export default ExpenseDate;
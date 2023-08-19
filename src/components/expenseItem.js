import './expenseItem.css';

// Passing 1 prop and will be used to access attributes from the components
// We can also use destructing in the parameter section {date, title, amount            }
function ExpenseItem(data) {
    const month = data.date.toLocaleString('en-US', { month: 'long' });
    const day = data.date.toLocaleString('en-US', { day: '2-digit' });
    const year = data.date.getFullYear();

    return (
        <div className='expense-item'>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
            <div className='expense-item__description'>
                <h2>{data.title}</h2>
                <div className='expense-item__price'>${data.amount}</div>
            </div>
        </div>
    )
}



export default ExpenseItem;

// Always use uppercase while defining custom component as it will not confuse react with inbuilt html components 
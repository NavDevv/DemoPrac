import './expenseItem.css';
import ExpenseDate from './expenseDate'
// Passing 1 prop and will be used to access attributes from the components
// We can also use destructing in the parameter section {date, title, amount            }
function ExpenseItem(data) {
    return (
        <div className='expense-item'>
            <ExpenseDate date={data.date} ></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{data.title}</h2>
                <div className='expense-item__price'>${data.amount}</div>
            </div>
        </div>
    )
}



export default ExpenseItem;

// Always use uppercase while defining custom component as it will not confuse react with inbuilt html components 
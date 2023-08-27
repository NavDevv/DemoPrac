import './expenseItem.css';
import ExpenseDate from './expenseDate'
import Card from './Card';
// Passing 1 prop and will be used to access attributes from the components
// We can also use destructing in the parameter section {date, title, amount            }
function ExpenseItem(data) {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={data.date} ></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{data.title}</h2>
                <div className='expense-item__price'>${data.amount}</div>
            </div>
        </Card>
    )
}



export default ExpenseItem;

// Always use uppercase while defining custom component as it will not confuse react with inbuilt html components 
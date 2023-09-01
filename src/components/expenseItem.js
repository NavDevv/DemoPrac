import './expenseItem.css';
import ExpenseDate from './expenseDate'
import Card from './Card';
import React, { useState } from 'react';
// Passing 1 prop and will be used to access attributes from the components
// We can also use destructing in the parameter section {date, title, amount            }
function ExpenseItem(data) {

    //  Array destructing

    const [title, setTitle] = useState(data.title);

    const clickHandler = () => {
        setTitle('Updated!');
    };

    return (
        <Card className='expense-item' >
            <ExpenseDate date={data.date} ></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${data.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}



export default ExpenseItem;

// Always use uppercase while defining custom component as it will not confuse react with inbuilt html components 
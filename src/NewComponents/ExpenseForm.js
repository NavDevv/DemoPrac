import { useState } from "react";
import "./ExpenseForm.css"

function ExpenseForm() {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }
    const DateChangeHandler = (event) => {
        setDate(event.target.value);
    }



    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min={0.01} step={0.01} onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label onChange={DateChangeHandler}>Date</label>
                    <input type="date" min={'2019-01-01'} max={'2023-12-31'}></input>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )

}

export default ExpenseForm;
import ExpenseItem from "./expenseItem";
import "./expenses.css"

function Expenses(data) {

    return (
        <div className="expenses">
            <ExpenseItem title={data.items[0].Title} amount={data.items[0].Amount} date={data.items[0].date}></ExpenseItem>
            <ExpenseItem title={data.items[1].Title} amount={data.items[1].Amount} date={data.items[1].date}></ExpenseItem>
            <ExpenseItem title={data.items[2].Title} amount={data.items[2].Amount} date={data.items[2].date}></ExpenseItem>
            <ExpenseItem title={data.items[3].Title} amount={data.items[3].Amount} date={data.items[3].date}></ExpenseItem>
        </div>
    )

}

export default Expenses;
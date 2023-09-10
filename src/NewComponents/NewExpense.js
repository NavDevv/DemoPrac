import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

function NewExpense() {

    const onSaveDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            ID: Math.random().toString()
        };
        console.log(expenseData)
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSave={onSaveDataHandler} />
        </div>
    )

}

export default NewExpense;
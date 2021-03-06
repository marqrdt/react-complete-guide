import React from 'react'
import './ExpenseForm'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: String(Math.floor(Math.random() * 100000))
        }
        console.log(expenseData)
        props.onAddExpense(expenseData)
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>

    
}

export default NewExpense
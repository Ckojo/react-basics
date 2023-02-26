import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import NewExpenseButton from './NewExpenseButton';
import './NewExpense.css';

const NewExpense = (props) => {
    const [formVisibility, setFormVisibility] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    const expenseFormVisibilityHandler = visibility => {
        setFormVisibility(visibility)
    }

    return <div className='new-expense'>
        {!formVisibility &&
            <NewExpenseButton
                formVisibility={!formVisibility}
                onExpenseFormVisibility={expenseFormVisibilityHandler}
            />}
        {formVisibility &&
            <ExpenseForm
                formVisibility={!formVisibility}
                onExpenseFormVisibility={expenseFormVisibilityHandler}
                onSaveExpenseData={saveExpenseDataHandler}
            />}
    </div>
}

export default NewExpense;

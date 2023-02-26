import React, { useState } from 'react';

const NewExpenseButton = props => {
    const [expenseFormVisibility, setExpenseFormVisibility] = useState(props.formVisibility)

    const buttonClickHandler = () => {
        setExpenseFormVisibility(expenseFormVisibility)
        props.onExpenseFormVisibility(expenseFormVisibility)
    }

    return <button className='new-expense-button' onClick={buttonClickHandler}>Add Expense</button>
}

export default NewExpenseButton;

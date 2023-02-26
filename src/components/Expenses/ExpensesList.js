import React from 'react';

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {
    if (props.items.length === 0) {
        return <h2>Found no expenses.</h2>
    }

    return (
        <ul className='expenses-list'>
            {
                props.items.map((item) => {
                    return (
                        <li key={item.id}>
                            <ExpenseItem
                                key={item.id}
                                title={item.title}
                                amount={item.amount}
                                date={item.date}
                            />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ExpensesList;

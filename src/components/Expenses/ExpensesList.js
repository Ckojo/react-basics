import React from 'react';
import Card from '../UI/Card';

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {
    if (props.items.length === 0) {
        return <Card className='empty-content'>
            <h2 className='expenses-list__fallback'>Found no expenses.</h2>
        </Card>
    }

    return (
        <ul className='expenses-list'>
            {
                props.items.map((item) => {
                    return (
                        <li>
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

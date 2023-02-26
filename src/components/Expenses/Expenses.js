import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import './Expenses.css';

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(item => {
        return item.date.getFullYear().toString() === filteredYear
    })

    const expensesContent = () => {
        let content = <Card className='expense-item expense-item__empty-content'>
            <p>No expenses found.</p>
        </Card>

        if (filteredExpenses.length > 0) {
            content = filteredExpenses.map(filteredItem => {
                return (
                    <ExpenseItem
                        key={filteredItem.id}
                        title={filteredItem.title}
                        amount={filteredItem.amount}
                        date={filteredItem.date}
                    />
                )
            })
        }

        return content
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            { expensesContent() }
        </Card>
    )
}

export default Expenses;

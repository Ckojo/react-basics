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

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {
                props.items.filter(item => item.date.getFullYear().toString === filteredYear).map(filteredItem => {
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
        </Card>
    )
}

export default Expenses;

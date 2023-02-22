import ExpenseItem from "./components/ExpenseItem";

function Expenses(props) {
    return (
        <div className='expenses'>
            {
                props.items.map(expense => {
                    return (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    )
                })
            }
        </div>
    )
}

export default Expenses;
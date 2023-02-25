import Card from "./components/UI/Card";
import ExpenseItem from "./components/Expenses/ExpenseItem";

function Expenses(props) {
    return (
        <Card className='expenses'>
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
        </Card>
    )
}

export default Expenses;
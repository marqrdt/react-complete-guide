import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

const Expenses = (props) => {
    const expenseList = [];
    props.expenses.forEach(expense => {
        expenseList.push(<ExpenseItem title={expense.title} date={expense.date} amount={expense.amount}/>)
    })
    return (
        <Card className="expenses">
            {expenseList}
       </Card>
    );
}

export default Expenses;
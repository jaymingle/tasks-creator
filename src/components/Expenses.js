import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <div className='expenses'>
      <ExpenseItem
        title={props.the_expenses[0].title}
        amount={props.the_expenses[0].amount}
        date={props.the_expenses[0].date}
      />
      <ExpenseItem
        title={props.the_expenses[1].title}
        amount={props.the_expenses[1].amount}
        date={props.the_expenses[1].date}
      />
      <ExpenseItem
        title={props.the_expenses[2].title}
        amount={props.the_expenses[2].amount}
        date={props.the_expenses[2].date}
      />
    </div>
  );
};

export default Expenses;

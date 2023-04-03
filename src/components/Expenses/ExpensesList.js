import { React } from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
  let expensesContent = <p className='no_expenses'>No Expenses Found</p>;
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'> No Expenses Found</h2>;
  }

  return (
    <ul className='expenses-list'>
      {
        (expensesContent = props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )))
      }
      ;
    </ul>
  );
};

export default ExpenseList;

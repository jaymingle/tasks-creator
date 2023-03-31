import { React, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');
  const filterYearHandler = (selectedYear) => {
    // console.log(selectedYear, 'Inside Expenses');
    setSelectedYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter onSelectFilterYear={filterYearHandler} defaultYear={selectedYear}/>
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
      </Card>
    </div>
  );
};

export default Expenses;

import { React, useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            onChange={titleHandler}
            value={enteredTitle}
          />
        </div>

        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            id='amount'
            min='0.01'
            step='0.01'
            onChange={amountHandler}
            value={enteredAmount}
          />
        </div>

        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            id='date'
            min='2019-01-01'
            max='2030-12-31'
            onChange={dateHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

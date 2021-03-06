import React from 'react'
import './ExpenseDate.css';

function ExpenseDate(props) {
    const month = props.expdate.toLocaleString('en-us', {month: 'long'});
    const day = props.expdate.toLocaleString('en-us', {day: '2-digit'});
    const year = props.expdate.getFullYear();
    return (
        <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
        </div>
    )
}

export default ExpenseDate

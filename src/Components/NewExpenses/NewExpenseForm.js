import React, {useState} from 'react'
import './NewExpenseForm.css';

function NewExpenseForm(props) {
  const[expensetitle, Setexpensetitle] = useState('');
  const[expenseamt, Setexpenseamt] = useState('');
  const[expensedate, Setexpensedate] = useState('');
    const TitleChangeHandler = (event) => {
     Setexpensetitle(event.target.value);
    }

    const AmountChangeHandler = (event) => {
      Setexpenseamt(event.target.value);
    }

    const DatechangeHandler = (event) => {
        Setexpensedate(event.target.value);
    }

    const FormsubmissionHandler = (event) => {
        event.preventDefault();
      const expendedetail = {
          title: expensetitle,
          amount: +expenseamt,
          expdate: new Date(expensedate),

      };
     props.onSaveExpensedata(expendedetail);
      Setexpensetitle('');
      Setexpenseamt('');
      Setexpensedate('');
    };

    return (
        
       
        <form onSubmit={FormsubmissionHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control"> 
                    <label>Title</label>
                    <input type="text" value={expensetitle} onChange={TitleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={expenseamt} onChange={AmountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={expensedate} onChange={DatechangeHandler}></input>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.hideexpfrm}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
        
    )
}

export default NewExpenseForm

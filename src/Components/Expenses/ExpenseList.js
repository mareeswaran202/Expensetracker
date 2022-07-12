import React from 'react'
import Expenseitem from './Expenseitem'
import './ExpensesList.css';
function ExpenseList(props) {
    if(props.explistitm.length === 0){
        return(<h2 className="expenses-list__fallback">No Expenses Found</h2>)
    }
    return (
        <ul className="expenses-list">
         {
             props.explistitm.map((expensedetail) => 
              <Expenseitem 
              key={expensedetail.ID}
              exptitle={expensedetail.title}
              expamt = {expensedetail.amount}
              expdate = {expensedetail.expdate}/>)
         }
        </ul>       
    )
}

export default ExpenseList

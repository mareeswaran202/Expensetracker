import React, {useState} from 'react'
import NewExpenseForm from './NewExpenseForm.js';
import './NewExpense.css';
function NewExpenses(props) {
    
  const ShowExpensedataHandler = (enteredexpensedata) => {
    const finalexpensedata = {...enteredexpensedata};
    props.onShowfinaldata(finalexpensedata);
  };
  const[showexpfrom, setshowexpfrm] = useState(false)
    const ShowExpFrmHandler = () =>{
      setshowexpfrm(true);
    }

    const HideexpfrmHandler = () =>{
      setshowexpfrm(false);
    }
    return (
        <div className="new-expense">
          {! showexpfrom && <button onClick={ShowExpFrmHandler}>Add New Expenses</button>}
          {showexpfrom && <NewExpenseForm onSaveExpensedata={ShowExpensedataHandler} hideexpfrm={HideexpfrmHandler}></NewExpenseForm>}
        </div>
    )
}

export default NewExpenses

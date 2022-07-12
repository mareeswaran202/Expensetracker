import React, {useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UserInterface.js/Card';
function Expenseitem(props){
    // const expensedate = new Date(2021,3,21);
    // const expensetitle = 'Car Insurance';
    // const expenseamt = 5000;  
    const[expensetitle, Setexpensetitle] = useState(props.exptitle);
    const clickHandler = () =>{
        Setexpensetitle('Title Updated');
    }

    return(
        <li>
            <Card className="expense-item">
           <ExpenseDate expdate={props.expdate}/>
            <div className="expense-item__description">
                <h2>{expensetitle}</h2>
                <div className="expense-item__price">{props.expamt}</div>
            </div>
            <button onClick={clickHandler}>Click Me</button>
        </Card>
        </li>
    )
}

export default Expenseitem;
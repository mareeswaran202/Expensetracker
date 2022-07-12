import React, {useState} from 'react'
import './Expenses.css';
import Card from '../UserInterface.js/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
function Expenses(props) {
  const[filteredyear, Setfilteredyear] = useState('2020');
    const showfityear = (selectedyear) => {
      Setfilteredyear(selectedyear);
    };

    const Filteredexpenselist = props.explist.filter(expensenewf => {
      
      return expensenewf.expdate.getFullYear().toString() === filteredyear;
    });
     
   
    return (
    <Card className="expenses">
      <ExpenseFilter finalvalue = {filteredyear} onPassfilteredyear = {showfityear}></ExpenseFilter>
      <ExpensesChart expenses={Filteredexpenselist}/>
      <ExpenseList explistitm={Filteredexpenselist}></ExpenseList>
       
      
        </Card>
    )
}

export default Expenses

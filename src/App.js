import React, {useState} from 'react';
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";

const Dummydata = [{ID:'E1', title: 'House Rent', amount: 8700, expdate: new Date(2021, 2, 8)},
{ID:'E2', title: 'Maid Salary', amount: 9000, expdate: new Date(2021, 2, 1)},
{ID:'E3', title: 'Grocery', amount: 5000, expdate: new Date(2021, 2, 5)},
{ID:'E4', title: 'Internet', amount: 1500, expdate: new Date(2021, 2, 21)},
]
function App() {
  const [expe, setexpe] = useState(Dummydata);
   const showfinaldatahandler = (exp) => {
   setexpe((prevexpense) => {
     return[exp, ...prevexpense];
   });
 };
 
  return (
    <div className="App">
    <NewExpenses onShowfinaldata = {showfinaldatahandler}></NewExpenses>
      <Expenses explist={expe}></Expenses>
      
    </div>
  );
}

export default App;

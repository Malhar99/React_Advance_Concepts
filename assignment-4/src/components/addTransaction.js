import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/globalState";
function AddTransaction(props) {
  const [text, setText] = useState("");
  const [newamount, setamount] = useState(0);
  const {
    addTransaction,
    errorHandler,
    reseterrorHandler,
  } = useContext(GlobalContext);

//   const amounts = transactions.map((transaction) => transaction.amount);
//   console.log(transactions.map((transaction) => transaction.amount))


  const handleError = () => {
    if(text === '' || Number(newamount) <= 0){
      errorHandler('Please fill the text and amount Fields');
      return;
    }
    return;
  }
  const onDeposit = (e) => {
    e.preventDefault();
    reseterrorHandler();
    if(text !== '' && newamount > 0) {
      const newTransaction = {
        id:Math.floor(Math.random()*100000000),
        text:text,
        amount:+newamount
      }
      addTransaction(newTransaction)
    }
    handleError();
    setText('');
    setamount(0);
    return;
  }

  const onExpense = (e) => {
    e.preventDefault();
    reseterrorHandler();
    if(text !== '' && newamount > 0) {
      const newTransaction = {
        id:Math.floor(Math.random()*100000000),
        text:text,
        amount:-newamount
      }
      addTransaction(newTransaction)
    }
    handleError();
    setText('');
    setamount(0);
    return;
  }
  return (
    <>
        <h3>Add new transaction</h3>
        <form id="form">
          <div class="form-control">
            <label for="text">Text</label>
            <input 
              type="text" 
              value={text} 
              placeholder="Enter text..." 
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div class="form-control">
            <label for="amount">
              Amount <br />
              (negative - expense, positive - income)
            </label>
            <input 
              type="number" 
              id="amount" 
              value={newamount}
              placeholder="Enter amount..." 
              onChange={(e) => setamount(e.target.value)}
            />
          </div>
          <button class="btn-add" onClick={onDeposit}>Add transaction</button>
          <button class="btn-expense" onClick={onExpense}>Expense transaction</button>
        </form>
    </>
  );
}

export default AddTransaction;

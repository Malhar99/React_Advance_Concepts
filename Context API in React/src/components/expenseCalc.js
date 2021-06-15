import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/globalState";
function ExpenseCalc(props) {
  const [text, setText] = useState("");
  const [newamount, setamount] = useState(0);
  const {
    transactions,
    deleteTransaction,
    addTransaction,
    errorHandler,
    reseterrorHandler,
  } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(transactions.map((transaction) => transaction.amount))
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item > 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

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
    <div>
      <h2>Expense Tracker</h2>

      <div class="container">
        <h4>Your Balance</h4>
        <h1 id="balance">${total}</h1>
        <div class="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p id="money-plus" class="money plus">
              +${income}
            </p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" class="money minus">
              -${expense}
            </p>
          </div>
        </div>
        <h3>History</h3>
        <ul id="list" class="list">
          {transactions.map((transaction) => (
            <li className={transaction.amount < 0 ? "minus" : "plus"}>
              {transaction.text}{" "}
              <span>{transaction.amount < 0 ? "-" : "+"}${transaction.amount}</span>
              <button
                className="delete-btn"
                onClick={() => deleteTransaction(transaction.id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
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
      </div>
    </div>
  );
}

export default ExpenseCalc;

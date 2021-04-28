import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
function TransactionList(props) {
  const {
    transactions,
    deleteTransaction,
  } = useContext(GlobalContext);

//   const amounts = transactions.map((transaction) => transaction.amount);
//   console.log(transactions.map((transaction) => transaction.amount))
  return (
    <>
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
    </>
  );
}

export default TransactionList;

import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import { useI18n } from '../../i18n';
function TransactionList(props) {
  const { t } = useI18n()
  const {
    transactions,
    deleteTransaction,
  } = useContext(GlobalContext);

//   const amounts = transactions.map((transaction) => transaction.amount);
//   console.log(transactions.map((transaction) => transaction.amount))
  return (
    <>
        <h3>{t("history")}</h3>
        <ul id="list" className="list">
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

import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/globalState";
import { useI18n } from '../i18n';
function AddTransaction(props) {
  const { t } = useI18n()
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
        <h3>{t("add_new_transaction")}</h3>
        <form id="form">
          <div class="form-control">
            <label for="text">{t("text")}</label>
            <input 
              type="text" 
              value={text} 
              placeholder="Enter text..." 
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div class="form-control">
            <label for="amount">
              {t("amount")} <br />
              ({t("negative-expense")}, {t("positive-income")})
            </label>
            <input 
              type="number" 
              id="amount" 
              value={newamount}
              placeholder="Enter amount..." 
              onChange={(e) => setamount(e.target.value)}
            />
          </div>
          <button class="btn-add" onClick={onDeposit}>{t("add_transaction")}</button>
          <button class="btn-expense" onClick={onExpense}>{t("expense_transaction")}</button>
        </form>
    </>
  );
}

export default AddTransaction;

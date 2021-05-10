import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import { useI18n } from '../../i18n';
function Income(props) {
  const { t } = useI18n()
  const {
    transactions
  } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(transactions.map((transaction) => transaction.amount))
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
        <div class="inc-exp-container">
          <div>
            <h4 className="income-title">{t("income")}</h4>
            <p id="money-plus" class="money plus">
              +${income}
            </p>
          </div>
          <div>
            <h4 className="expense-title">{t("expense")}</h4>
            <p id="money-minus" class="money minus">
              -${expense}
            </p>
          </div>
        </div>
  );
}

export default Income;

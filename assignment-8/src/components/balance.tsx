import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import { useI18n } from "../i18n";
const Balance: React.FC = () => {
  const { t } = useI18n();
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>{t("your_balance")}</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};

export default Balance;

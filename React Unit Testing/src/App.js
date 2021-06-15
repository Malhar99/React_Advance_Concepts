import React from 'react';
import { GlobalProvider } from "./context/globalState";
import Toast from "./components/Toast/toast";
import Header from "./components/Header/header";
import Balance from "./components/Balance/balance";
import Income from "./components/Income/income";
import TransactionList from "./components/TransactionList/transactionList";
import AddTransaction from "./components/AddTransaction/addTransaction";
import LanguageSelector from './components/LangaugeSelector/languageSelector';
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <LanguageSelector/>
      <Header/>
      <div className="container">
        <Balance/>
        <Income/>
        <TransactionList/>
        <AddTransaction/>
      </div>
      <Toast/>
    </GlobalProvider>
  );
}

export default App;

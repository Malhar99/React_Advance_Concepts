import "./App.css";
import { GlobalProvider } from "./context/globalState";
import Toast from "./components/toast";
import Header from "./components/header";
import Balance from "./components/balance";
import Income from "./components/income";
import TransactionList from "./components/transactionList";
import AddTransaction from "./components/addTransaction";
import LanguageSelector from './components/languageSelector';

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

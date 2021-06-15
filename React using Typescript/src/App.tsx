import "./App.css";
import { GlobalProvider } from "./context/globalState";
import { I18nContextProvider } from "./i18n/provider";
import Toast from "./components/toast";
import Header from "./components/header";
import Balance from "./components/balance";
import Income from "./components/income";
import TransactionList from "./components/transactionList";
import AddTransaction from "./components/addTransaction";
import LanguageSelector from "./components/languageSelector";
import { languages } from "./locales/index";

const App: React.FC = () => {
  return (
    <I18nContextProvider languages={languages}>
      <GlobalProvider>
        <LanguageSelector />
        <Header />
        <div className="container">
          <Balance />
          <Income />
          <TransactionList />
          <AddTransaction />
        </div>
        <Toast />
      </GlobalProvider>
    </I18nContextProvider>
  );
};

export default App;

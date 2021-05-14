import React, { createContext, useReducer } from "react";
import AppReducer from "./appReducer";
import {
  deleleTransactionAction,
  addTransactionAction,
  setErrorAction,
  resetErrorAction,
} from "./appActions";

const initialState = {
  transactions: [],
  error: undefined,
  deleteTransaction: (id: number) => {},
  addTransaction: (transaction: transaction) => {},
  errorHandler: (error: string) => {},
  reseterrorHandler: () => {},
};

interface transaction {
  id: number;
  text: string;
  amount: number;
}

interface State {
  transactions: transaction[];
  error: undefined | string;
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: transaction) => void;
  errorHandler: (error: string) => void;
  reseterrorHandler: () => void;
}

export const GlobalContext = createContext<State>(initialState);

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id: number) {
    dispatch(deleleTransactionAction(id));
  }

  function addTransaction(transaction: transaction) {
    dispatch(addTransactionAction(transaction));
  }

  function errorHandler(error: string) {
    dispatch(setErrorAction(error));
  }

  function reseterrorHandler() {
    dispatch(resetErrorAction());
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        deleteTransaction,
        addTransaction,
        errorHandler,
        reseterrorHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

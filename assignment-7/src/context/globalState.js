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
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch(deleleTransactionAction(id));
  }

  function addTransaction(transaction) {
    dispatch(addTransactionAction(transaction));
  }

  function errorHandler(error) {
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

export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const SET_ERROR = "SET_ERROR";
export const RESET_ERROR = "RESET_ERROR";

export const deleleTransactionAction = (id) => ({
  type: DELETE_TRANSACTION,
  payload: id,
});

export const addTransactionAction = (transaction) => ({
  type: ADD_TRANSACTION,
  payload: transaction,
});

export const setErrorAction = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const resetErrorAction = (id) => ({
  type: RESET_ERROR,
  payload: { error: undefined },
});

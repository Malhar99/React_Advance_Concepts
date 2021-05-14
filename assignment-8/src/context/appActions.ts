export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const SET_ERROR = "SET_ERROR";
export const RESET_ERROR = "RESET_ERROR";

interface Transections {
  id: number;
  text: string;
  amount: number;
}
export const addTransactionAction = (transaction: Transections) => ({
  type: ADD_TRANSACTION,
  payload: transaction,
});

export const deleleTransactionAction = (id: number) => ({
  type: DELETE_TRANSACTION,
  payload: id,
});

export const setErrorAction = (error: string) => ({
  type: SET_ERROR,
  payload: error,
});

export const resetErrorAction = () => ({
  type: RESET_ERROR,
  payload: { error: undefined },
});

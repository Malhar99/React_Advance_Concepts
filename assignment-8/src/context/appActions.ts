import {
  AddTransactionAction,
  ResetErrorHandlerAction,
  SetErrorHandlerAction,
  DeleteTransactionAction,
} from "./appReducer";

export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const SET_ERROR = "SET_ERROR";
export const RESET_ERROR = "RESET_ERROR";

interface Transections {
  id: number;
  text: string;
  amount: number;
}
export const addTransactionAction = (
  transaction: Transections
): AddTransactionAction => ({
  type: ADD_TRANSACTION,
  payload: transaction,
});

export const deleleTransactionAction = (
  id: number
): DeleteTransactionAction => ({
  type: DELETE_TRANSACTION,
  payload: id,
});

export const setErrorAction = (error: string): SetErrorHandlerAction => ({
  type: SET_ERROR,
  payload: error,
});

export const resetErrorAction = (): ResetErrorHandlerAction => ({
  type: RESET_ERROR,
  payload: { error: undefined },
});

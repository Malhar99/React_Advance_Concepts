import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  RESET_ERROR,
  SET_ERROR,
} from "./appActions";
interface transaction {
  id: number;
  text: string;
  amount: number;
}
interface State {
  transactions: transaction[];
  error: undefined | string;
}

// interface AddTransactionAction {
//   type: typeof ADD_TRANSACTION;
//   payload: transaction;
// }

// interface DeleteTransactionAction {
//   type: typeof DELETE_TRANSACTION;
//   payload: number;
// }

// interface SetErrorHandlerAction {
//   type: typeof SET_ERROR;
//   payload: string;
// }

// interface ResetErrorHandlerAction {
//   type: typeof RESET_ERROR;
//   payload: undefined;
// }

// type Action =
//   | AddTransactionAction
//   | DeleteTransactionAction
//   | SetErrorHandlerAction
//   | ResetErrorHandlerAction;
export default function AppReducer(state: State, action: any) {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case RESET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}

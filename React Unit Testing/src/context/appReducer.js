import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  RESET_ERROR,
  SET_ERROR,
} from "./appActions";

export default function AppReducer(state,action){
    switch (action.type) {
        case ADD_TRANSACTION:
            return{
                ...state,
                transactions:[action.payload,...state.transactions]
            }
            
        case DELETE_TRANSACTION:
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
            
        case SET_ERROR:
            return{
                ...state,
                error:action.payload
            }
            
        case RESET_ERROR:
            return{
                ...state,
                error:action.payload
            }
            
        default:
            break;
    }
}

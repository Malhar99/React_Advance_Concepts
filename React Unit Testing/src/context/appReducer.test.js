import reducer from './appReducer';
import { ADD_TRANSACTION , DELETE_TRANSACTION } from './appActions';

describe('App Reducer',()=>{
    const transactions = [
        {
            id: 1,
            text:"Salary",
            amount:+8000
        },
        {
          id: 2,
          text:"Rent",
          amount:-7000
        }
    ]
    it('it should ADD_Transaction',()=>{
        const state={
            transactions:[],
        }
        const action={
            type:ADD_TRANSACTION,
            payload:transactions
        }
        expect(reducer(state,action)).toEqual({
            ...state,
            transactions:[action.payload,...state.transactions]
        })
    })
    it('it should Delete_Transaction',()=>{
        const state={
            transactions:[],
        }
        reducer(state,{
            type:ADD_TRANSACTION,
            payload:transactions[0]
        })
        reducer(state,{
            type:ADD_TRANSACTION,
            payload:transactions[1]
        })
        const action={
            type:DELETE_TRANSACTION,
            payload:1
        }
        expect(reducer(state,action)).toEqual({
            ...state,
            transactions:state.transactions.filter(
                (transactions) => transactions.id !== action.payload
            )
        })
    })
})

import React, { createContext, useReducer, useEffect } from 'react';
import { getQuery, postQuery } from './actions';
import { reducer } from './reducers';

const initialState = {
    posts: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const withQuery = (payload) => {
        dispatch(getQuery(payload));
    };
    
    const createQuery = (payload) => {
        dispatch(postQuery(payload));
    };
    return (
        <GlobalContext.Provider value={{
            posts: state.posts,
            withQuery,
            createQuery
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

import { useEffect, useReducer } from "react";

const initialState = {
  loading: "",
  error: "",
  data: []
};

function apiReducer(state, action) {
  switch (action.type) {
    case "DATA_FETCH_START":
      return { ...state, loading: true };
    case "DATA_FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "DATA_FETCH_SUCCESS":
      return { ...state, loading: false,error: "", data: action.payload };
    default:
      return state;
  }
}

export function useFetch(endpoint) {
  const [data, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    dispatch({ type: "DATA_FETCH_START" });

    fetch(endpoint)
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch({ type: "DATA_FETCH_SUCCESS", payload: json });
      })
      .catch(error => {
        dispatch({ type: "DATA_FETCH_FAILURE", payload: error.message });
      });
  }, []);

  return data;
}
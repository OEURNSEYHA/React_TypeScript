// import React from 'react'

import { useReducer } from "react";
type CounterSates = {
  count: number;
};

type CounterAction = {
  type: string;
  payload: number;
};
const initialState : CounterSates = { count: 0 };

function reducer(state: CounterSates, action: CounterAction): CounterSates {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
     return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Counter
      {/* {state?.count} */}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        {" "}
        Increment 10 {state.count}
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        {" "}
        Decrement 10 {state.count}
      </button>
    </div>
  );
}

export default Counter;

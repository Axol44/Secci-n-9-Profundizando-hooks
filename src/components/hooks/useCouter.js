// Hook: función
import { useState  } from "react";

export const useCouter = (initialState) => {
  const [state, setState] = useState(initialState);

  const increment = ( factor) => {
    setState( state + factor);
  }

  const decrement = (factor = 1) => {
    setState( state - factor );
  }

  const reset = () => {
    setState( initialState );
  }

  return {
    state,
    increment,
    decrement,
    reset
  }
}

import { createContext, useReducer, ReactNode } from "react";
import { CounterContextType } from "../types/CounterTypes";
import {
  counterReducer,
  initialState,
  incrementAction,
  decrementAction,
  resetAction,
} from "../store/counterReducer";

export const CounterContext = createContext<CounterContextType | undefined>(
  undefined,
);

interface CounterProviderProps {
  children: ReactNode;
}

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increment = (number: number) => {
    dispatch(incrementAction(number));
  };

  const decrement = (number: number) => {
    dispatch(decrementAction(number));
  };

  const reset = () => {
    dispatch(resetAction());
  };

  const contextValue: CounterContextType = {
    state,
    increment,
    decrement,
    reset,
  };

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};

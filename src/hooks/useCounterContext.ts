import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";
import { CounterContextType } from "../types/CounterTypes";

export const useCounterContext = (): CounterContextType => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
};

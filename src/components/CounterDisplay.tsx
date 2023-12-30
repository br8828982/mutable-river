import { useCounterContext } from "../hooks/useCounterContext";

const CounterDisplay = () => {
  const { state } = useCounterContext();

  return <p>Count: {state}</p>;
};

export default CounterDisplay;

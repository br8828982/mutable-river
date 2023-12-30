import { useCounterContext } from "../hooks/useCounterContext";

const CounterControls = () => {
  const { increment, decrement, reset } = useCounterContext();

  return (
    <>
      <button onClick={() => increment(1)}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => decrement(1)}>Decrement</button>
    </>
  );
};

export default CounterControls;

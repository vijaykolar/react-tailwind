import React from "react";
import { useAppSelector } from "./hooks/useAppSelector";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { decrement, increment, incrementByAmount } from "./store/counterSlice";
function Counter() {
  const count = useAppSelector((state) => state.count.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(incrementByAmount(20))}>
        incrementByAmount
      </button>
      {count}
    </div>
  );
}

export default Counter;

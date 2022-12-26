import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCounter,
  addNumber,
  subNumber,
  addNumberAsync,
} from "../store/features/counter/counterSlice.js";

export const Counter = () => {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch();
  const [increment, setIncrement] = useState(8);
  return (
    <div>
      <div className="store">store counter: {count}</div>
      <div className="increment">increment / decrement: {increment}</div>
      <div>
        <input
          type="text"
          value={increment}
          onChange={(e) => setIncrement(e.target.value)}
        />
      </div>
      <div className="operator">
        <button onClick={() => dispatch(addNumber(Number(increment)))}>
          Add (+)
        </button>
        <button onClick={() => dispatch(subNumber(Number(increment)))}>
          Sub (-)
        </button>
        <button
          className="asyncButton"
          onClick={() => dispatch(addNumberAsync(Number(increment)))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
};

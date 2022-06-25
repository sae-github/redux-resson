import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCount, decrement, increment } from "./counterSlice";

export const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [inputCount, setInputCount] = useState("");

  return (
    <div className="count-wrapper">
      <p className="count">Count : {count}</p>
      <button
        className="increment-button"
        onClick={() => dispatch(increment())}
      >
        ＋
      </button>

      <button
        className="decrement-button"
        onClick={() => dispatch(decrement())}
      >
        −
      </button>
      <div className="input-field-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="数字を入力してください"
          value={inputCount}
          onChange={(e) => setInputCount(e.target.value)}
        />
        <button
          className="submit-button"
          onClick={() => {
            dispatch(changeCount(Number(inputCount)));
            setInputCount("");
          }}
        >
          送信
        </button>
      </div>
    </div>
  );
};

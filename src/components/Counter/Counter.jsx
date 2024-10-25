import { useState } from "react";

const Counter = ({ title = "Counter App", initCounter = 0 }) => {
  const [count, setCount] = useState(initCounter);

  const incrementhandler = () => {
    setCount((preState) => preState + 1);
    setCount((preState) => preState + 1);
  };

  const decrementhandler = () => {
    setCount((preState) => preState - 1);
    setCount((preState) => preState - 1);
  };

  return (
    <div>
      <h2>{title}</h2>
      <h3>{count}</h3>

      <div>
        <button
          onClick={incrementhandler}
        >
          Increment
        </button>

        <button
          onClick={decrementhandler}
        >
          Decrement
        </button>

        <button
          onClick={() => {
            setCount(initCounter);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;

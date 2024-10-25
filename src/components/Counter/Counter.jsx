import styles from "./Counter.module.css";
import { useState } from "react";
import { Button } from "react-bootstrap";

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

  const titleStyle = { color: "red", backgroundColor: "#d1d1d1" };

  return (
    <div className={styles.counter}>
      <h2 style={titleStyle}>{title}</h2>
      <h3>{count}</h3>

      <div>
        <Button className="m-2" variant="success" onClick={incrementhandler}>
          Increment
        </Button>

        <Button className="m-2" variant="warning" onClick={decrementhandler}>
          Decrement
        </Button>

        {/* <button
          onClick={() => {
            setCount(initCounter);
          }}
        > Reset</button>*/}

        <Button className="m-2" variant="danger" onClick={() => {setCount(initCounter);}} >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;

import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const plus = () => {
    setNum((prev) => prev + 1);
  };
  const minus = () => {
    setNum((prev) => prev - 1);
  };

  return (
    <div>
      <button onClick={minus}>-</button>
      <span style={{ color: num < 0 ? "red" : num >= 10 ? "blue" : "black" }}>
        {num}
      </span>
      <button onClick={plus}>+</button>
    </div>
  );
};

export default Counter;

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p className=""> Count: {count}</p>
      <button onClick={increaseCount}>Increase Counter</button>
      <button onClick={decreaseCount}>Decrease Counter</button>
    </div>
  );
};

export default Counter;

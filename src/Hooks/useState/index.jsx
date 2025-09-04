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
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <p className="text-xl font-bold mb-4">Count: {count}</p>
        
        <button 
          onClick={increaseCount}
          className="bg-blue-500 hover:bg-blue-700 border-blue-300  text-white font-bold py-2 px-4 rounded mr-2"
        >
          Increase Counter
        </button>
        
        <button 
          onClick={decreaseCount}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Decrease Counter
        </button>
      </div>
    </div>
  );
};

export default Counter;

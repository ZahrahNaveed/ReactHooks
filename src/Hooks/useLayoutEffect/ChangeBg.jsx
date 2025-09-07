import React, { useLayoutEffect, useState } from "react";

const ChangeBg = () => {
  const [color, setColor] = useState("lightblue");

  useLayoutEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">
        Current Background: {color}
      </h2>
      <div className="space-x-4">
        <button
          onClick={() => setColor("red")}
          className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Green
        </button>
        <button
          onClick={() => setColor("blue")}
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Blue
        </button>
      </div>
    </div>
  );
};

export default ChangeBg;

import React, { useEffect, useState } from 'react'


const FetchData = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
    document.title= counter;
    }, [counter]) //dependency array

    
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white shadow-xl rounded-2xl p-10 text-center">
    <h1 className="text-3xl font-bold mb-6 text-gray-800">
      Counter: <span className="text-blue-600">{counter}</span>
    </h1>

    <div className="space-x-4">
      <button
        onClick={() => setCounter(counter + 1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
      >
        ➕ Increase
      </button>

      <button
        onClick={() => setCounter(counter - 1)}
        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
      >
        ➖ Decrease
      </button>
    </div>
  </div>
</div>

  )
}

export default FetchData

import React from 'react'
import Counter from "./Hooks/useState";
import FetchData from './Hooks/useEffect/FetchData';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <FetchData/>
      {/* <Counter/> */}

    </div>
  )
}

export default App

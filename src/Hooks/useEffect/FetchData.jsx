import React, { useEffect, useState } from 'react'

const FetchData = () => {
useEffect(() => {
  const fetchDatafromAPI = async () =>{
    const api =  await fetch ( "https://jsonplaceholder.typicode.com/users");
    const result = await api.json();
    console.log ("fetching data = ", result)
  }

    fetchDatafromAPI();
  
}, [])


return (
    <div>
      
    </div>
  )
}

export default FetchData

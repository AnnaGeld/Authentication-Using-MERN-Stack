import React from 'react'
import { useLocation } from 'react-router-dom'



function Home() {
 const location = useLocation();
  const data = location.state;

  return (
  <div>
  <h2 className='container'>Hello and Welcome !{data}</h2>
  
  </div>
    )
}

export default Home
import React from 'react'
import { useLocation } from 'react-router-dom'
import Register from "../pages/Register"



function Home() {
 const location = useLocation();
  const data = location.state;

  return (
  <div >
  { data ?(<h2 className='container' >Hello and Welcome! {data}</h2>)
  :<Register/>
  }
  </div>
    )
}

export default Home
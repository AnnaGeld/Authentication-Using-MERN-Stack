import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
 <div className='navbr' >
    <nav class="navbar navbar-dark bg-primary">
    {/*<Link className='link' to="/" >Home</Link>*/}
    <Link className='link' to="/register">Register</Link>
    <Link className='link' to="/login">Login</Link>
    </nav>
    </div>
  )
}

export default Navbar
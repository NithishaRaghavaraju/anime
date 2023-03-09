import React from 'react'
import {Link} from "react-router-dom"
import bars from "../assets/bars-solid.svg"
import "./navbar.css"
const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
           <Link to="/" className='homelink'><h1 className='homepage'>Home</h1></Link>
           <Link to="/Options"><button><img src={bars} alt="bar" className='bars'/></button></Link>
       </div>
    </div>
  )
}

export default Navbar

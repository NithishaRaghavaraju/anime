import React from 'react'
import anime from "../assets/best anime pic.jpg"
import "./home.css"
import bars from "../assets/bars-solid.svg"
import naruto from "../assets/naruto.png"
import {Link,useNavigate} from "react-router-dom"
import Navbar from "./Navbar.jsx"
const Home = () => {
  return (
    <div className='main'>
        <div className='home'>

        </div>
        <div className='text top'>
           <Link to="/" className='homenav'><h1 className='home'>Home</h1></Link>
           <Link to="/Options"><button><img src={bars} alt="bar" className='bars'/></button></Link>
       </div>
       <div className='text middle'>
       <h1 className='title'>Experience the world of anime in your everyday life</h1>
       </div>
       <div className='text bottom'>
          <Link className='footer' to="/Naruto">Naruto</Link>
          <Link className='footer' to="/AOT">AOT</Link>
          <Link className='footer' to="/Jujutsu">Jujutsu</Link>
          <Link className='footer' to="/DemonSlayer">Demon Slayer</Link>
          <Link className='footer' to="/DeathNote">Death Note</Link>
       </div>
    </div>
  )
}

export default Home

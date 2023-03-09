import React from 'react'
import {Routes, Route} from "react-router-dom"
import Naruto from "./components/Naruto.jsx"
import Home from "./components/Home.jsx"
import Jujutsu from './components/Jujutsu.jsx'
import DemonSlayer from './components/DemonSlayer.jsx'
import AOT from "./components/Aot.jsx"
import DeathNote from './components/DeathNote.jsx'
import Options from './components/Options.jsx'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/Naruto" element ={<Naruto />}/>
        <Route path="/Jujutsu" element ={<Jujutsu/>}/>
        <Route path="/DemonSlayer" element ={<DemonSlayer/>}/>
        <Route path="/AOT" element ={<AOT/>}/>
        <Route path="/DeathNote" element ={<DeathNote/>}/>
        <Route path="/Options" element ={<Options/>}/>
     </Routes>
  )
}

export default AllRoutes

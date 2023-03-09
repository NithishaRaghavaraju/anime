import React from 'react'
import Naruto from "../assets/naruto_bg.jpg"
import Jujutsu from "../assets/jujutsu3.jpg"
import Aot from "../assets/aot1.jpg"
import DemonSlayer from '../assets/demon-slayer2.jpg'
import DeathNote from '../assets/deathnote2.jpg'
import Navbar from './Navbar'
import {Link} from "react-router-dom"
import "./options.css"

const options = () => {
    const animes = [
        {
            id: "naruto1",
            image: Naruto,
            name : "NARUTO",
            link :"/Naruto"
          },
          {
            id: "aot1",
            image: Aot,
            name : "ATTACK ON TITAN",
            link : "/AOT"
          },  
          {
            id: "jujutsu1",
            image: Jujutsu,
            name : "JUJUTSU KAISEN",
            link : "/Jujutsu"
          },
          {
            id: "demonslayer1",
            image: DemonSlayer,
            name : "DEMON SLAYER",
            link : "/DemonSlayer"
          },
          {
            id: "deathnote1",
            image: DeathNote,
            name : "DEATH NOTE",
            link : "/DeathNote"
          }
        ]

  return (
    <div className='optionsmain'>
       <Navbar/> 
       <h1>Celebrate your passion for anime with premium merchandise collection</h1>
       <div className="listanime">
       {animes.map(anime=>
          <Link to={anime.link}  className={anime.id} ><div key={anime.id}>
            <p className='animepara'>{anime.name}</p>
        </div></Link>
        )}
          
       </div>
    </div>
  )
}

export default options

import React from 'react'
import Navbar from './Navbar'
import "./anime.css"
import narutoJacket from "../assets/naruto_jacket.jpg"
import narutobg from "../assets/naruto_bg.jpg"

const Anime = (props) => {
  const Indiapart = () => {
    const myDiv = document.getElementById("India");
    myDiv.scrollIntoView({ behavior: "smooth" });
  };
  const USApart = () => {
    const myDiv = document.getElementById("USA");
    myDiv.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={props.name}>
      <Navbar/>
      <div className='content'>
      <div className='upper'>
      <button onClick={Indiapart} className="category"><h3>India</h3></button>
      <button onClick={USApart} className="category"><h3>USA</h3></button>
      </div>  
      <div className='center'>
        <h4>India</h4>
        <div className='leftnav' id="India">
           <p>Image</p>
           <p>Product</p>
           <p>Price</p>
        </div>
        {props.IndiaData.map(anime=>
            <div key={anime.id} className="Eachanime">
            <img src= {anime.image} alt="hou_1" className='anime_image' />
            <p>{anime.ItemName}</p>
            <button className='amazon-link'>{anime.Link}</button>
        </div>
        )}
      </div>
      <div className='center'>
        <h4>USA</h4>
        <div className='leftnav' id="USA">
           <p>Image</p>
           <p>Product</p>
           <p>Price</p>
        </div>
        {props.USAData.map(anime=>
            <div key={anime.id} className="Eachanime">
            <img src= {anime.image} alt="hou_1" className='anime_image' />
            <p>{anime.ItemName}</p>
            <button className='amazon-link'>{anime.Link}</button>
        </div>
        )}

      </div>
      </div>
    </div>
  )
}

export default Anime


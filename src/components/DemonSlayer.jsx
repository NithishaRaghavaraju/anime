import React from 'react'
import narutoJacket from "../assets/naruto_jacket.jpg"
import Anime from "./Anime.jsx"


const DemonSlayer = () => {
    const India = [
        {
            id: "1",
            image: narutoJacket,
            ItemName: "Naruto Jacket",
            Price: 100,
            Link : <a className='animelink' href='https://www.homegrounds.co/best-espresso-machines/'>CHECK PRICE</a>
          }
          ,
          {
            id: "2",
            image: narutoJacket,
            ItemName: "New York",
            Price: 100,
            Link : <a className='animelink' href='https://www.homegrounds.co/best-espresso-machines/'>CHECK PRICE</a>
          },
          {
            id: "3",
            image: narutoJacket,
            ItemName: "New York",
            Price: 100,
            Link: <a className='animelink' href='https://www.homegrounds.co/best-espresso-machines/'>CHECK PRICE</a>
          },
          {
            id: "4",
            image: narutoJacket,
            ItemName: "New York",
            Price: 100,
            Link: <a className='animelink' href='https://www.homegrounds.co/best-espresso-machines/'>CHECK PRICE</a>
          }
          
        ];
        const america = [
            {
                id: "1",
                image: narutoJacket,
                ItemName: "Naruto Jacket",
                Price: 100,
                Link : <a className='animelink' href='https://www.homegrounds.co/best-espresso-machines/'>CHECK PRICE</a>
              }
              ,
              {
                id: "2",
                image: narutoJacket,
                ItemName: "New York",
                Price: 100,
                Link : <a className='animelink' href='https://www.homegrounds.co/best-espresso-machines/'>CHECK PRICE</a>
              },
              {
                id: "3",
                image: narutoJacket,
                ItemName: "New York",
                Price: 100,
                Link: <a className='animelink' href='https://www.homegrounds.co/best-espresso-machines/'>CHECK PRICE</a>
              },
              {
                id: "4",
                image: narutoJacket,
                ItemName: "New York",
                Price: 100,
                Link: <a className='animelink' href='https://www.homegrounds.co/best-espresso-machines/'>CHECK PRICE</a>
              }
            ]
  return (
    <div>
        <Anime name="DemonSlayer" IndiaData={India} USAData = {america}/>
    </div>
  )
}

export default DemonSlayer

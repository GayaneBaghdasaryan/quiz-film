import React from "react";
import './about.css'
import { useFilmTable } from ".."


export default function About(){
 const context = useFilmTable()
 
return (
    <div className='main'>
  {Object.values(context).map(val =>{
        return (
            <div key={val.id} className="about">
              <h1>{val.title}:{val.original_title}</h1>
              <img src={val.image} alt=" "></img>
              <h3>Director:{val.director}</h3>
              <div className="info">   
              <h2>About</h2>
              <h4>{val.description}</h4>
              <h3>Release Date:{val.release_date}</h3>
              </div>
            </div> 
          )
          
     })}
 
   </div>
) 
} 
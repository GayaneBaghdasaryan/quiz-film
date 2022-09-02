import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const FilmTable = React.createContext({})

export function useFilmTable(){
  return useContext(FilmTable)
}

export default function FilmContext({children}) {
  const[data, setData] = useState('');

 useEffect(()=>{
  axios.get('https://ghibliapi.herokuapp.com/films')
  .then(res => {
    setData(res.data)  
  }).catch(err => console.log(err))
  },[])

 
   return(
    <>
    <FilmTable.Provider value={data}>
         {children} 
    </FilmTable.Provider>    
    </>
    )
  
}



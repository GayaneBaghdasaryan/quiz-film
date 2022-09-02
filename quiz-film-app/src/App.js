import React from 'react';
import FilmContext from './FilmTable';
import About from './FilmTable/About/about';

export const FilmTable = React.createContext();

export default function App () {

  return (
    <>
    <FilmContext>
     <About/>
    </FilmContext>
    </>

  )
}


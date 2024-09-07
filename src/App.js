import React from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';

const API_URl = ' http://www.omdbapi.com/?i=tt3896198&apikey=5cfdfd5f'
const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URl}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    };

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

  return (
    <div className="app">
      <h1>Film Galore</h1>
      <div className="search">
        <input 
            type="text" 
            placeholder="Search for a movie" 
            value = 'superman'
            onChange={()=>{}}
        />
        <img
            scr = {SearchIcon}
            alt = "search"
            onClick = {()=>{}}
        />
        </div>
       
    </div>
  );
}

export default App;
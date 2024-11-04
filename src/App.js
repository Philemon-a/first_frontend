import React from "react";
import { useState } from "react";
import './App.css';
import MovieCard from './MovieCard';
import { FaSearch } from "react-icons/fa";


const API_URl = ' http://www.omdbapi.com/?i=tt3896198&apikey=5cfdfd5f'
const App = () => {
    const [movies, setMovies] = useState([]);

    const [searchValue, setSearchValue] = useState('');
    const searchMovies = async () => {
        if (searchValue === '') {
            alert('Please enter a movie name');
            return;
        }
        const response = await fetch(`${API_URl}&s=${searchValue}`);
        const data = await response.json();
        setMovies(data.Search);
    };

  return (
    <div className="app">
      <h1>Film Galore</h1>
      <form className="search" onSubmit={(e) => {
          e.preventDefault();
            searchMovies()
        }}>
            <input 
                type="text" 
                placeholder="Search for a movie" 
                value = {searchValue}
                onChange={(e)=> setSearchValue(e.target.value)}
            />
            <button className="search-button" type="submit" ><FaSearch /></button>
        </form>

        {
            movies?.length >0
            ?( <div className="container">
                {movies.map((movie, index) => (
                    <MovieCard key={index} movie={movie}  />
                ))}
                </div>
            ) :
            (
                <div>
                    <h2>No movies found</h2>
                </div>
            )
        }
       
        
       
    </div>
  );
}

export default App;
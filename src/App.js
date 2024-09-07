import React from "react";
import { useEffect,useState } from "react";
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './Search.svg';

const API_URl = ' http://www.omdbapi.com/?i=tt3896198&apikey=5cfdfd5f'
const App = () => {
    const [movies, setMovies] = useState([]);

    const [searchValue, setSearchValue] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URl}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
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
                value = {searchValue}
                onChange={(e)=> setSearchValue(e.target.value)}
            />
            <img
                scr = {SearchIcon}
                alt = "search"
                onClick = {()=> searchMovies(searchValue)}
            />
        </div>

        {
            movies?.length >0
            ?( <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie}  />
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
import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card-container">
            <div className="movie-img">
                <img className="mov-img"  src={movie.Poster !== "N/A"? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>
            <div className="detail">
                <span>
                    {movie.Type}
                </span>
                <p>
                    {movie.Year}
                </p>
            </div>
            <h4>{movie.Title}</h4>
        </div>
    );
};


export default MovieCard;

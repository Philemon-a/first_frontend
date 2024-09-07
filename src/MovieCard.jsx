import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
           <div>
            <p>
                {movie.Year}
            </p>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <span>
                    {movie.Type}
                </span>
                <h3>{movie.Title}</h3>
            </div>
           </div>
        </div>
    );
};

export default MovieCard;

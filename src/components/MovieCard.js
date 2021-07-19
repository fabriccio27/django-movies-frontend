import React from "react";
import { Link } from "react-router-dom";
const MovieCard = ({movie})=>{
    return(
        <div>
            <Link to={`/movies/${movie.id}`}><h2>{movie.title}</h2></Link>
            <p>{movie.average_rating}</p>
            {/* <a href={`/ratings/${movie.id}`}>Ratings</a> */}
            <Link to={`/ratings/${movie.id}/`}>Ratings</Link>
        </div>
    )
};

export default MovieCard;
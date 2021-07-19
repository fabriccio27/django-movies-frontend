import React, {useEffect, useState} from "react";
import { connect } from "react-redux";

const MovieDetailPage = ({isAuthenticated, match})=>{

    const [movie, setMovie] = useState({});
    /* si no existe me da {"detail": "Not found."} */
    useEffect(()=>{
        const movieId = match.params["movieId"];
        const abortController = new AbortController();
        const signal = abortController.signal;
        const url = `http://localhost:8000/api/movies/${movieId}/`;

        fetch(url, {signal:signal})
        .then(res=>res.json())
        .then(data=>{
            setMovie(data);
        })
        .catch(err=>console.log(`This happened while trying to fetch movie details: ${err}`))

        return ()=>{
            abortController.abort();
        }
    },[]);

    function isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    if (isEmpty(movie)) {
        return <h1>Fetching movie data...</h1>
    }
    return(
        <div>
            <h1>{movie.title}</h1><span>{movie.average_rating}</span>
            <h2>Release date: {movie.release}</h2>
            <p>Genre: {movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}</p>
            <p>{movie.plot}</p>
        </div>
    )
}

export default MovieDetailPage;
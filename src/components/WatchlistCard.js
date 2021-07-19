import React from "react";
import MovieCard from "./MovieCard";

const WatchlistCard =({movie, owner, handleRemoveFromWl})=>{
    
    return(
        <div>
            <MovieCard movie={movie} /> 
            {owner && <button onClick={()=>handleRemoveFromWl(movie.id)}>Remove from watchlist</button>}
        </div>
        
        
    )
}

export default WatchlistCard;
import React from "react";
import MovieCard from "./MovieCard";
import {connect} from "react-redux";

const WatchlistCard =({movie, owner, handleRemoveFromWl, isAuthenticated})=>{
    
    return(
        <div>
            <MovieCard movie={movie} /> 
            {owner && isAuthenticated && <button onClick={()=>handleRemoveFromWl(movie.id)}>Remove from watchlist</button>}
        </div>
        
        
    )
}

const mapStateToProps = (state) =>{
    return{
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(WatchlistCard);
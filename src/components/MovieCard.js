import React from "react";
import { Link } from "react-router-dom";
import StarIcon from '@material-ui/icons/Star';

const MovieCard = ({movie})=>{
    return(
        <div className="card" style={{"width": "18rem", "margin":"1rem 0"}}>
            <div className="card-body card-body-custom">
                <Link to={`/movies/${movie.id}`}><h3 className="card-title">{movie.title}</h3></Link>
                <p className="card-text"><span>{movie.average_rating}</span> <StarIcon/></p>
                <Link to={`/ratings/${movie.id}/`}>Ratings</Link>
            </div>
            
        </div>
    )
};

export default MovieCard;
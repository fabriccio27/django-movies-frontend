import React from "react";

const Rating = ({rating})=>{
    return (
        <div>
            <h2>{rating.comment}</h2>
            <p>{rating.rating}</p>
        </div>
    )
}

export default Rating;
import React, {useState} from "react";

const RatingForm = ({movieId, activateRefresh})=>{
    const [rating, setRating] =  useState(3);
    const [comment, setComment] = useState("");
    const [success, setSuccess] = useState(false);
    console.log(activateRefresh);

    const handleOnSubmit=(ev)=>{
        ev.preventDefault();
        console.log(localStorage.getItem("token"));
        /* pepe argento f44d5d469278e613747ccaa647e0b92c81082fc7*/
        const url = `http://localhost:8000/api/movies/${movieId}/ratings/`;
        fetch(url, {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Accept":"application/json",
                "Authorization":`Token ${localStorage.getItem("token")}`
            },
            body:JSON.stringify({
                rating,
                comment
            })
        })
        .then(res=>res.json()) /* si es exitoso devuelve la info completa de la review, userid, movieid, etc. */
        .then(data=>{
            console.log(data);
            setSuccess(true);
        })
        .catch(err=>{
            console.log(`This happened while trying to create review: ${err}`);
        });
        /* hacer cosas para hacer post request, aca creo que necesito el token */
    }
    const handleOnCommentChange=(ev)=>{
        ev.persist();
        setComment(ev.target.value);
    }
    const handleRatingChange=(ev)=>{
        setRating(parseInt(ev.target.value))
    }
    
    if(success){
        return <h2>Great! we received your review.</h2>
    }

    return(
        <form onSubmit={handleOnSubmit} className="review-form">
            <div className="form-group col-2" >
                <label htmlFor="ratingField">Rating</label>
                <input type="number" value={rating} onChange={handleRatingChange} min={1} max={5} id="ratingField" className="form-control"/>
                <small className="form-text text-muted">1 to 5 stars</small>
            </div>
            <div className="form-group">
                <label htmlFor="commentField">Review</label>
                <textarea 
                    value={comment} 
                    onChange={handleOnCommentChange} 
                    maxLength={500} 
                    placeholder="Did you like it?"
                    rows={10} 
                    cols={40} 
                    className="form-control"
                    id="commentField"
                >
                </textarea>
                <small className="form-text text-muted">Up to 500 characters</small>
            </div>
            <button className="btn btn-secondary" type="submit">Send Review</button>
        </form>
    )
}

export default RatingForm;
import React from "react";
import {connect} from "react-redux";
import { Redirect } from "react-router";
import StarBorderIcon from '@material-ui/icons/StarBorder';

class MovieDetailPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movieId: this.props.match.params["movieId"],
            movie:{},
            error:"",
            addedToWl:false,
        };
        this.handleAddToWl = this.handleAddToWl.bind(this);
    }
    abortController = new AbortController();

    componentDidMount(){
        console.log("componente MovieDetail montado.")
        const url = `http://localhost:8000/api/movies/${this.state.movieId}/`;
        fetch(url, {signal:this.abortController.signal})
        .then(res=>res.json())
        .then(data=>{
            if (data.hasOwnProperty("title")){
                this.setState(()=>({
                    movie:data
                }));
            }else{
                this.setState(()=>({
                    movie:{error:"Not Found"},
                    error:data.detail
                }))
            }
            
        })
        .catch(err=>console.log(`This happened while trying to fetch movie details: ${err}`))
    }
    /* si no existe me da {"detail": "Not found."} */
    
    componentWillUnmount(){
        console.log("componente MovieDetail desmontado.")
        this.abortController.abort()
    }

    handleAddToWl(){
        const url = `http://localhost:8000/api/users/${this.props.currentUserId}/watchlist/`;
        fetch(url, {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Accept":"application/json",
                "Authorization":`Token ${localStorage.getItem("token")}`
            },
            body:JSON.stringify({
                movie_id:this.state.movieId
            })
        })
        .then(resp=>resp.json())
        .then(data=>{
            if (data.hasOwnProperty("success")){
                this.setState(()=>({
                    addedToWl:true
                }))
            }else{
                this.setState(()=>({
                    error:data["message"]
                }));
            }
        })
        .catch(err=>console.log(`This happened while trying to add to watchlist: ${err}`))
    }

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    
    render(){
        if (this.isEmpty(this.state.movie)) {
            return <h2>Fetching movie data...</h2>
        } else if (this.state.error){
            return <h2>Not Found</h2>
        } else if (this.state.addedToWl){
            return <Redirect to={`/watchlist/${this.props.currentUserId}`} />
        }
        return(
            <div>
                <h1>{this.state.movie.title}</h1><span>{this.state.movie.average_rating} <StarBorderIcon color="secondary"/></span>
                {this.state.error!=="" && <h3>{this.state.error}</h3>}
                {this.props.isAuthenticated && <button className="btn btn-success" onClick={this.handleAddToWl}>Add to Watchlist</button>}
                <h2>Release date: {this.state.movie.release}</h2>
                <p>Genre: {this.state.movie.genre.charAt(0).toUpperCase() + this.state.movie.genre.slice(1)}</p>
                <p>{this.state.movie.plot}</p>
            </div>
        )

    }
    
}

const mapStateToProps = (state) =>{
    return {
        isAuthenticated: state.auth.isAuthenticated,
        currentUserId: state.auth.user_info["user_id"]
    }
}

export default connect(mapStateToProps)(MovieDetailPage);
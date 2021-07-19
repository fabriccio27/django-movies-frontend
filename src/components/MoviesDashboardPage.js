import React from "react";
import MovieCard from "./MovieCard";

class MovieDashboardPage extends React.Component {
   state = {
        token:"",
        user_id:"",
        movies:[]
    }
  
    abortController = new AbortController();
  
    componentDidMount(){
      // aca tengo que buscar recursos de drf API
      // http://localhost:8000/api/movies/
      console.log("Componente app montado");
      fetch('http://localhost:8000/api/movies/', {signal:this.abortController.signal})
        .then(results => results.json())
        .then(data =>{
          this.setState(()=>{
            return {
              movies:data
            }
          })
        })
        .catch(err=>console.log(`This happened while trying to fetch movie list: ${err}`))
    }
    componentWillUnmount(){
      console.log("Componente desmontado");
      this.abortController.abort()
    }
  
    render(){
      return(
        <div>
          <h1>Movie List</h1>
          {this.state.movies.map( movie =>{
            return <MovieCard key={movie.id} movie={movie}/>
          })}
        </div>
      )
    }
  }

export default MovieDashboardPage;
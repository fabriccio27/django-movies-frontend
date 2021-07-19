/* aca deberia tener un pedazo de state que tenga current movie current movie reviews creo */
import React from "react";
import { connect } from "react-redux";
import Rating from "./Rating";
import { withRouter } from "react-router";

/* aca voy a llegar mediante movies/someid, en el componente accedo haciendo match.params.someid */
class MovieRatingPage extends React.Component {
    state = {
        movie_id:this.props.match.params["movieId"],
        movie:{},
        ratings:[]
    }
    abortController = new AbortController();
    componentDidMount(){
        // http://localhost:8000/api/movies/
        /* console.log(`${this.props.match.params["movieId"]}`); */
        console.log("Componente movie montado");
        fetch(`http://localhost:8000/api/movies/${this.state.movie_id}/ratings/`, {signal:this.abortController.signal})
          .then(results => results.json())
          .then(data =>{
            this.setState(()=>{
              return {
                ratings:data
              }
            })
          })
          .catch(err=>console.log(`This happened while trying to fetch movie ratings: ${err}`))
    }

    componentWillUnmount(){
        console.log("Componente desmontado");
        this.abortController.abort()
    }
    render(){
        return(
            /* info de pelicula y abajo ratings pero utilizando componentes creo 
            tambien poner formulario para añadir critica a esta pelicula 
            o redirecciona a pagina donde pueda escribir critica para esta pelicula*/
            <div>
                <h1>{this.state.movie.title}</h1>
                {this.state.ratings.map(rating=>{
                    return <Rating key={rating.id} rating={rating}/>
                })}
        
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    // tengo state.pruebas, state.auth, state.expenses segun lo que puse en configureStore
    return {
        creador: state.pruebas.info.creador
        /* despues accederia en jsx como this.props.creador */
    }
}


export default withRouter(connect(mapStateToProps)(MovieRatingPage));
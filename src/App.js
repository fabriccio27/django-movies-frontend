import React from "react";
import './App.css';

/* aca al AppRouter lo envolvia en el provider de redux, y a eso le hacia ReactDOM.render  */



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      token:"",
      user_id:"",
      movies:[]
    };
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
        {this.state.movies.map( mv =>{
          return <h3 key={mv.id}>{mv.title}</h3>
        })}
      </div>
    )
  }
}

export default App;

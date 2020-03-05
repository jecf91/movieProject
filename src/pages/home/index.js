import React, { Component } from "react";
import { Link } from 'react-router-dom';

import './style.css';

class Home extends Component{

    constructor(props){
        super(props);
        this.state={
            movies:[]
        };

        this.loadMovies = this.loadMovies.bind(this);
    }

    componentDidMount(){
        this.loadMovies();
    }

    loadMovies(){
       let ApiUrl = 'https://sujeitoprogramador.com/r-api/?api=filmes';
       fetch(ApiUrl)
        .then((res) => res.json())
        .then((json) => {
            this.setState({movies:json});
            console.log(json)
        })
    }

    render(){
        return(
            <div className="container">
                <div className="movie-list">
                    {this.state.movies.map( (movie) => {
                        return(
                            <article key={movie.id} className="movie">  
                                <strong>{movie.nome}</strong>
                                <img src={movie.foto} alt={movie.nome}/>
                                <Link to={`/movie/${movie.id}`}>Mais informação</Link>
                            </article>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Home
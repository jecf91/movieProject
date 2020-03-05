import React, {Component} from 'react';
import './style.css';

class Movie extends Component{

    constructor(props){
        super(props);
        this.state={
            movie:[]
        };
    }

    componentDidMount(){
        const { id } = this.props.match.params
        let urlWithId = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
        fetch(urlWithId)
        .then((res) => res.json())
        .then((json) => {
            this.setState({movie: json});
            console.log(json);
        })
    }

    render(){
        return(
            <div className="movie-info">
                <h1>{this.state.movie.nome}</h1>
                <img src={this.state.movie.foto} alt={this.state.movie.nome} />
                {this.state.movie.length !== 0 && <h3>Sinopse:</h3>}
                {this.state.movie.sinopse}

            </div>
        )
    }
}

export default Movie;
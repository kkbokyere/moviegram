import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MovieList from "../components/MovieList/MovieList";
import moviesData from "../constants/movies.json";

class MovieListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesData: moviesData
        };
    }
    render() {
        return(<MovieList data={this.state.moviesData}/>)
    }
}

MovieListContainer.propTypes = {
    moviesData: PropTypes.array,
};

export default MovieListContainer;
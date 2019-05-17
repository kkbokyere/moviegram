import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MovieList from "../components/MovieList";
import {connect} from 'react-redux';
import {getAllMovies} from "../actions/moviesActions";

class MovieListContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        if(!this.props.movies.length) {
            this.props.getAllMovies();
        }
    }
    render() {
        return(<MovieList data={this.props.movies}/>)
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllMovies: () => dispatch(getAllMovies()),
    }
};


MovieListContainer.propTypes = {
    movies: PropTypes.array,
    getAllMovies: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
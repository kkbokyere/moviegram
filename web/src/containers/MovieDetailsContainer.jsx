import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MovieDetails from "../components/MovieDetails/MovieDetails";
import {connect} from 'react-redux';

import {getMovieById} from "../actions/moviesActions";

class MovieDetailsContainer extends Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {
        this.props.getMovieById(this.props.id)
    }
    render() {
        return(<MovieDetails {...this.props.selectedMovie}/>)
    }
}
const mapStateToProps = (state) => {
    return {
        selectedMovie: state.movies.selected
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieById: (id) => dispatch(getMovieById(id)),
    }
};
MovieDetailsContainer.propTypes = {
    id: PropTypes.string,
    selectedMovie: PropTypes.object,
    getMovieById: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer);
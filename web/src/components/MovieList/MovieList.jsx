import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem';

const MovieList = ({data}) => {
    return (
        <section className="movie-list">
            {data.map((movieData, index) => <MovieItem key={index} {...movieData}/>)}
        </section>
    );
};

MovieList.propTypes = {
    data: PropTypes.array.isRequired
};

export default MovieList;
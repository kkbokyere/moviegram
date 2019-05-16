import React from 'react';
import MovieItem from '../MovieItem';

const MovieList = ({data}) => {
    return (
        <section className="movie-list">
            {data.map((movieData) => <MovieItem key={movieData.id} {...movieData}/>)}
        </section>
    );
};

export default MovieList;
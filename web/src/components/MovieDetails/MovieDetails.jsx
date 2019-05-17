import React from 'react';
import PropTypes from 'prop-types';

const MovieDetails = ({ img, imgWide, title, showTimes = [], description }) => {
    return (
        <article className="movie-details">
            <div className="movie-details__img">
                <picture>
                    <source media="(min-width: 768px)" srcSet={img}/>
                    <img src={imgWide} alt={title}/>
                </picture>
            </div>
            <div className="movie-details__wrapper">
                <h1 className="movie-details__title">{title}</h1>
                <div className="movie-details__showtimes">
                    <h3>Show Times:</h3>
                    {showTimes.map(({time, cinema}, index) => <span className="movie-details__time" key={index}>{time} @ {cinema}</span>)}
                </div>
                <div className="movie-details__description">
                    {description}
                </div>
            </div>
        </article>
    );
};

MovieDetails.propTypes = {
    img: PropTypes.string,
    imgWide: PropTypes.string,
    title: PropTypes.string,
    showTimes: PropTypes.array,
    description: PropTypes.string,
    id: PropTypes.string,
};

export default MovieDetails;
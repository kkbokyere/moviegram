import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({ img, title, showTimes = [], id }) => {
    return (
        <article className="movie-item">
            <div>
            <img className="movie-item__img" src={img} alt={title}/>
            </div>
            <div className="movie-item__wrapper">
                <h1 className="movie-item__title">{title}</h1>
                <div className="movie-item__showtimes">
                    <h3>Show Times:</h3>
                    {showTimes.map(({time, cinema}, index) => <span className="movie-item__time" key={index}>{time} @ {cinema}</span>)}
                </div>
                <button className="btn btn-primary">See more</button>
            </div>
        </article>
    );
};

MovieItem.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    showTimes: PropTypes.array,
    id: PropTypes.string,
};

export default MovieItem;
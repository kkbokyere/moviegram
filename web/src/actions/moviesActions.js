import {FETCH_MOVIES_FAILURE, FETCH_MOVIES_LOADING, FETCH_MOVIES_SUCCESS, FETCH_MOVIE_BY_ID_SUCCESS} from "./actionTypes";
import moviesData from '../movies.json'
/**
 * Sync actions. Return actual payloads
 */
export const fetchMoviesSuccess = (movies) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies
    }
};

export const fetchMovieByIdSuccess = (movie) => {
    return {
        type: FETCH_MOVIE_BY_ID_SUCCESS,
        payload: movie
    }
};

export const fetchMoviesFailure = (error) => {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: {
            error
        }
    }
};

export const fetchMovieLoading = () => {
    return {
        type: FETCH_MOVIES_LOADING,
    }
};


/**
 *  Async Actions, that technically will do the HTTP call to some end point...in our case, we're mocking
 */

/**
 * Get All Movies
 * @returns {function(*)}
 */
export const getAllMovies = () => {
    return (dispatch) => {
        dispatch(fetchMovieLoading());
        dispatch(fetchMoviesSuccess(moviesData))
    }
};


/**
 * Get Movie by ID. Potential to have a simple api that fetches individual movie
 * @returns {function(*)}
 */
export const getMovieById = (id) => {
    return (dispatch) => {
        dispatch(fetchMovieLoading());
        const selectedMovie = moviesData.find((obj) => obj.id === id);
        dispatch(fetchMovieByIdSuccess(selectedMovie))
    }
};

/**
 * Filter Movies by title.
 * @returns {function(*)}
 */
export const filterMoviesByTitle = (movieTitle) => {
    return (dispatch) => {
        const filteredMovies = moviesData.filter(({title}) => {
            const isMatch = (title.toLowerCase().includes(movieTitle.toLowerCase()));
            return (isMatch)
        });
        dispatch(fetchMoviesSuccess(filteredMovies));
    }
};
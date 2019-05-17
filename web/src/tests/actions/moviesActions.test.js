import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../actions/moviesActions';
import * as types from '../../actions/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

import moviesData from '../../movies.json'


describe('Movies Actions', () => {
    it('should creates FETCH_MOVIES_SUCCESS when fetching movies has been done', () => {
        const expectedActions = [
            { type: types.FETCH_MOVIES_LOADING },
            { type: types.FETCH_MOVIES_SUCCESS, payload: moviesData }
        ];
        const store = mockStore({ movies: {
            data: [],
            selected: {},
            loading: false,
            error: ""
        }});
        store.dispatch(actions.getAllMovies());
        expect(store.getActions()).toEqual(expectedActions)
    });

    it('should creates FETCH_MOVIES_BY_ID when fetching movies has been done', () => {
        const expectedActions = [
            { type: types.FETCH_MOVIES_LOADING },
            { type: types.FETCH_MOVIE_BY_ID_SUCCESS, payload: moviesData[0] }
        ];
        const store = mockStore({ movies: {
            data: [],
            selected: {},
            loading: false,
            error: ""
        } });
        store.dispatch(actions.getMovieById("1"));
        expect(store.getActions()).toEqual(expectedActions);
    })
});
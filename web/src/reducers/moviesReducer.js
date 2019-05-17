import {
    FETCH_MOVIES_LOADING,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIE_BY_ID_SUCCESS,
    FETCH_MOVIES_FAILURE,
} from '../actions/actionTypes'


export const initialState = {
    data: [],
    selected: {},
    loading: false,
    error:''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_LOADING:
            return {...state,
                loading: true
            };
        case FETCH_MOVIES_SUCCESS:
            return {...state,
                loading: false,
                data: action.payload
            };
        case FETCH_MOVIE_BY_ID_SUCCESS:
            return {...state,
                loading: false,
                selected: action.payload
            };
        case FETCH_MOVIES_FAILURE:
            return {
                ...state,
                loading:false,
                error: action.payload.error
            };
        default:
            return state;
    }
}

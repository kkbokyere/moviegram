import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

//Enhancer to allow Redux debugging via chrome redux extension tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Create the Redux store/state
const configureStore = (initialState) => {
    return createStore(
        rootReducer,/* preloadedState, */
        initialState,
        composeEnhancers(applyMiddleware(thunk)),
    )
};

export default configureStore;
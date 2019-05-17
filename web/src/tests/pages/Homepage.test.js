import React from 'react';
import { mount, shallow } from 'enzyme';
import { initialState as moviesReducer } from '../../reducers/moviesReducer'
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Homepage from '../../pages/Homepage';
import MovieListContainer from '../../containers/MovieListContainer';
const store = configureStore();
describe('Homepage Component', () => {
    // const mockStore = configureStore();
    // const initialState = {
    //     movies: moviesReducer
    // };
    // let wrapper;
    // let store;
    // beforeEach(() => {
    //     store = mockStore(initialState);
    //     wrapper = mount(<Provider store={store}><Homepage /></Provider>);
    // });
    // it('should render Homepage', () => {
    //     const wrapperComponent = renderer.create(<Homepage />).toJSON();
    //     expect(wrapperComponent).toMatchSnapshot()
    // });
    // it('should render Homepage with MovieListContainer', () => {
    //     expect(wrapper.find(MovieListContainer)).toEqual(1)
    // });
});
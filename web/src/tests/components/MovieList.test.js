import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import MovieList from '../../components/MovieList';
import MovieItem from "../../components/MovieItem";

describe('MovieList Component', () => {
    it('should render MovieList', () => {
        const wrapper = renderer.create(<MovieList data={[{}]} />).toJSON();

        expect(wrapper).toMatchSnapshot()
    });

    it('should render MovieList with movie Items', () => {
        const moviesArray = [{
            "id": "1",
            "title": "AVENGERS: ENDGAME",
        }];
        const wrapper = mount(<MovieList data={moviesArray} />);

        expect(wrapper.find(MovieItem).length).toEqual(moviesArray.length)
    });
});
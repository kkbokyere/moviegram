import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Homepage from '../../pages/Homepage';
import MovieListContainer from '../../containers/MovieListContainer';

describe('Homepage Component', () => {
    it('should render Homepage', () => {
        const wrapper = renderer.create(<Homepage />).toJSON();
        expect(wrapper).toMatchSnapshot()
    });
    it('should render Homepage with MovieListContainer', () => {
        const wrapper = mount(<Homepage />);
        expect(wrapper.find(MovieListContainer).length).toEqual(1)
    });
});
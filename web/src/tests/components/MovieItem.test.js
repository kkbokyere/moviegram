import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import MovieItem from '../../components/MovieItem';

describe('MovieItem Component', () => {
    it('should render MovieItem', () => {
        const wrapper = renderer.create(<MovieItem />).toJSON();

        expect(wrapper).toMatchSnapshot()
    });

    it('should render MovieItem with data', () => {
        const movieItemData = {
            "id": "1",
            "title": "AVENGERS: ENDGAME",
            "description": "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios' grand conclusion to twenty-two films",
            "showTimes": [
                {"time": "May 16th 2019, 3:24:25 pm", "cinema":"Wood Green - Vue"},
                {"time": "May 16th 2019, 3:24:25 pm", "cinema": "Enfield - Cineworld"}
            ],
            "img": "https://via.placeholder.com/200x300",
            "imgWide": "https://via.placeholder.com/400x300"
        };

        const movieItemComponent = mount(<MovieItem {...movieItemData} />);

        expect(movieItemComponent.find('.movie-item__title').text()).toEqual(movieItemData.title)
    });

});
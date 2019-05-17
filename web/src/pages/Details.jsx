import React from 'react';
import MovieDetailsContainer from "../containers/MovieDetailsContainer";

const Details = ({ match }) => {
    return(<MovieDetailsContainer id={match.params.id}/>);
};

export default Details;
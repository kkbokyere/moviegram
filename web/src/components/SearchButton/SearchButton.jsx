import React from 'react';
import PropTypes from 'prop-types';

const SearchButton = ({ SearchButton }) => {
    return (
        <button onClick={SearchButton} className="btn btn-secondary">Search</button>
    )
};

SearchButton.propTypes = {
    handleOnClick: PropTypes.func,
};

export default SearchButton;
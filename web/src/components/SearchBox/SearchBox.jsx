import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ handleOnKeyUp }) => {
    return (
        <input placeholder="Start typing film..." onChange={(e) => handleOnKeyUp(e.target.value)}/>
    )
};

SearchBox.propTypes = {
    handleOnKeyUp: PropTypes.func,
};

export default SearchBox;
import React from 'react';
import { Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import SearchContainer from '../../containers/SearchContainer';

const Header = ({ showSearch }) => {
    return (
        <header className="header navbar">
            {showSearch ? <SearchContainer/> :
                <Link to="/" className="btn btn-primary">Back</Link>
             }
        </header>
    )
};

Header.propTypes = {
    showSearch: PropTypes.bool,
};

export default Header;
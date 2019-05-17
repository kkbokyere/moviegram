import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router";

import PropTypes from 'prop-types';

import Header from "../components/Header/Header";
import {ROUTES} from "../constants/constants";


class HeaderContainer extends Component {
    constructor(props) {
        super(props);
    }
    isHomepage = () => {
        const { location } = this.props;
        return (location.pathname === ROUTES.homepage);
    };
    render() {
        return(
            <Header showSearch={this.isHomepage()}/>
        )
    }
}
HeaderContainer.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default withRouter(HeaderContainer);
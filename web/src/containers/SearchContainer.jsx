import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import SearchBox from "../components/SearchBox/SearchBox";
import SearchButton from "../components/SearchButton/SearchButton";
import {filterMoviesByTitle} from "../actions/moviesActions";


class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.state.searchText !== prevState.searchText) {
            this.props.filterMoviesByTitle(this.state.searchText);
        }
    }

    filterMoviesByTitle = (searchText) => {
        this.setState({
            searchText
        })
    };
    render() {
        return(
            <Fragment>
                <SearchBox handleOnKeyUp={this.filterMoviesByTitle}/>
                <SearchButton handleOnClick={this.filterMoviesByTitle}/>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        filterMoviesByTitle: (movieTitle) => dispatch(filterMoviesByTitle(movieTitle))
    }
};
SearchContainer.propTypes = {
    filterMoviesByTitle: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
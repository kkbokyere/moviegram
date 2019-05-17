import React, { Component } from 'react';
import moviesData from "../movies.json";

function withMoviesData(WrappedComponent) {
    return class extends Component {
        state = {
            isLoading: true,
            data: []
        };
        componentDidMount() {
        }
        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />;
        }
    }
}
export default withMoviesData;
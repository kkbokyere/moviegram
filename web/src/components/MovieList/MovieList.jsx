import React from 'react';
import MovieItem from '../MovieItem';

const MovieList = ({ data }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ul>
                        <li>
                            {/*<MovieItem title="" description="" img="" url="" />*/}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MovieList;
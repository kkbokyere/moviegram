import React from 'react';
import MovieListContainer from './containers/MovieListContainer';
import './App.css';

function App() {
  return (
    <div className="moviegram">
      <header className="header">
        <input placeholder="search"/>
      </header>

        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <MovieListContainer />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;

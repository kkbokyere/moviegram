import React from 'react';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <div className="moviegram">
      <header className="header">
        <input placeholder="search"/>
      </header>

      <MovieList />

    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Homepage from './pages/Homepage';
import Details from './pages/Details';
import './App.css';

function App() {
  return (
      <Router>
        <div className="moviegram">
          <header className="header">
            <input placeholder="search"/>
          </header>

            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Route exact path="/" component={Homepage} />
                        <Route exact path="/details/:id" component={Details} />
                    </div>
                </div>
            </div>
        </div>
      </Router>
  );
}

export default App;

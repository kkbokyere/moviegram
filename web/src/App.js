import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Homepage from './pages/Homepage';
import Details from './pages/Details';
import './App.css';
import {ROUTES} from "./constants/constants";

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
                        <Switch>
                            <Route exact path={ROUTES.homepage} component={Homepage} />
                            <Route path={`${ROUTES.details}/:id`} component={Details} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
      </Router>
  );
}

export default App;

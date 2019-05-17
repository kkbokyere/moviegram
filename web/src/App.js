import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Homepage from './pages/Homepage';
import Details from './pages/Details';

import Header from './components/Header';

import './App.css';
import {ROUTES} from "./constants/constants";

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();

function App() {
  return (
      <Provider store={store}>
          <Router>
              <div className="moviegram">
                  <Header showSearch={window.location.pathname === ROUTES.homepage} />
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
      </Provider>
  );
}

export default App;

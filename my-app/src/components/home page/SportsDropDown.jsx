import React from 'react';
import '../../app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SportsPage from '../sports/SportsPage';

const SportsDropDown = () => (
  <Router>
    <div className="dropdown">
      <button type="button" className="dropbtn">
        SPORTS
        <i className="fa fa-caret-down" />
      </button>
      <div className="dropdown-content">
        <div className="row">
          <div className="column">
            <h3>TYPE&apos;S</h3>
            <h4>__________</h4>
            <b href="#">AIKIDO</b>
            <b href="#">KARATE</b>
            <b href="#">JIU JITSU</b>
            <b href="#">WUSHU</b>
            <b href="#">TAEKWONDO</b>
          </div>
        </div>
      </div>
    </div>
    <Switch>
      <Route path="/sports" component={SportsPage} />
    </Switch>
  </Router>
);

export default SportsDropDown;

import React from 'react';
import { useSelector,connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import HomePage from './components/homepage/Homepage';
import Login from './components/login/Login';
import PrivateRoute from './components/PrivateRoute';
import CoronaPage from './components/corona/corona';
import './App.css';

axios.defaults.withCredentials = true;

const App =  ({ authenticated, checked }) => {
  const session = useSelector(state => state.session);
  console.log('Session App : ',session);


  return (
      <Router>
      { checked &&
        <div>
          <PrivateRoute exact path="/" component={HomePage} authenticated={authenticated} />
          <PrivateRoute exact path="/covid" component={CoronaPage} authenticated={authenticated} />
          <Route exact path="/login" component={Login}/>
          
        </div>
      }
    </Router>
)}

const { bool } = PropTypes;

App.propTypes = {
  authenticated: bool.isRequired,
  checked: bool.isRequired
};

const mapState = ({ session }) => ({
  checked: session.checked,
  authenticated: session.authenticated
});

export default connect(mapState)(App);


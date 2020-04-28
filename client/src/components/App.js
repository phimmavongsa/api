import React from 'react';
import { useSelector,connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import HomePage from './homepage/Homepage';
import Login from './login/Login';
import Signup from './login/Signup';
import PsuLogin from './login/PsuLogin';
import PrivateRoute from './PrivateRoute';
import CoronaPage from './corona/corona';
import InputPost from './blogtemplate/InputForm';
import Policy from './policy/privacy__policy';
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
          <PrivateRoute exact path="/post" component={InputPost} authenticated={authenticated} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/psuauth" component={PsuLogin} /> 
          <Route exact path="/policy" component={Policy} />       
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


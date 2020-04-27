import React from 'react';
import { useSelector,connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import HomePage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
import PrivateRoute from './components/PrivateRoute';
import CoronaPage from './components/corona/corona';
import InputPost from './components/blogtemplate/InputForm';
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


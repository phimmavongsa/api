import React, { useEffect } from 'react';
import { useSelector,useDispatch,connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios'
import HomePage from './components/homepage/Homepage';
import Login from './components/login/Login';
import PrivateRoute from './PrivateRoute';
import './App.css';


axios.defaults.withCredentials = true

// const port = 8000;
// let authenticated ;

const App =  ({ authenticated, checked }) => {
  const session = useSelector(state => state.session)
  console.log('Session App : ',session)


  return (
      <Router>
      { checked &&
        <div>
          <PrivateRoute exact path="/" component={HomePage} authenticated={authenticated} />
          <Route path="/login" component={Login}/>
        </div>
      }
    </Router>
)}
  // const session = useSelector(state => state.session);
  // const dispatch = useDispatch(); 

  // const {authenticated } =  session;
  // const resualt = axios.get(`http://localhost:${port}/api/auth`);
  // console.log('Resault App :',resualt.data);  
  // authenticated = resualt.data;
  // useEffect(() => {
  //   let data = {}
  //   const getLogin = async () => {
  //     const resualt = await axios.get(`http://localhost:${port}/api/auth`);
  //     console.log('Resault App :',resualt.data);  
  //     authenticated = resualt.data.authenticated;
  //     data = resualt.data;
  //   }

  //   if(authenticated){
  //     dispatch( { 
  //         type:'LOGIN', 
  //         ...data
  //     } )

  // }
  //     getLogin()
  //   // eslint-disable-next-line
  // }, [props])

  // if(session.authenticated){
  //   return (
  //     <div>
  //         {/* <Login /> */}
  //         <HomePage />
  //     </div>
  //   );
  // } else if (!session.authenticated){
  //   return (
  //     <div>
  //          {/* <HomePage /> */}
  //          <Login />
  //     </div>
  //   );
  // }else{
  //   return (
  //     <div>
  //       <h1>Please Wait A Minute</h1>
  //     </div>
  //   )
  // }
// }

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


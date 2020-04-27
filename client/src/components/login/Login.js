import React from 'react';
import * as sessionActions from '../actions/sessionActions';
import { useSelector, useDispatch,connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios'
import './Login.css';


const port = 8000;

const Login = (props) => {
    const user = useSelector( state => state.user );
    const usersession = useSelector( state => state.usersession );
    const dispatch = useDispatch();

    console.log('Props : ', props);
    console.log('user sesion : ', usersession);

    const LogInState = async (history) => {
    
        // console.log('User : ', user.username);
        await axios.get(`http://localhost:${port}/api/auth`);
        let result = await axios.post(`http://localhost:${port}/api/auth?username=${user.username}&password=${user.password}`);
        
        // state = resualt.data;
        // console.log('resualt : ', state);
        // console.log('resualt', resualt);
        if(result.data.authenticated){
            dispatch( { 
                type:'LOGIN', 
                ...result.data
            } )
            const { login } = props.actions;
            login(user, history);

        }
        // history.push('/');
        // window.location.reload(true);
   

    }

    // const onSubmit = (history) => {
    //     logIn();
    //     // const { user } = user;
    //     const { login } = props.actions;
    //     login(user, history);
    // }
  
    const SubmitButton = withRouter(({ history }) => (
        <button
            className = 'btn'
            onClick = {() => LogInState(history)}
            type = "submit">
            LogIn
        </button>
      ))
    


  return (
        
            <div className="blurred-box">
                <div className="user-login-box">
                    <span className="user-icon"></span>
                    <div className="user-title">PSU PASSPORT</div>
                    {/* <form   > */}
                        <input  type="text" onChange={(e) => dispatch({ type:'CHENG_USERNAME', username: e.target.value })} 
                                autoComplete="username" className="user-username" 
                                name='username' placeholder="Username" 
                                autoFocus required />
                        <input type="password" onChange={(e) => dispatch({ type:'CHENG_PASSWORD', password: e.target.value })} 
                                autoComplete="current-password" className="user-password" 
                                name='password' placeholder="Password" 
                                required />
                        {/* <button type="submit" className="btn" onClick= { withRouter(({ history }) => (() => LogInState(history))) }> Submit </button> */}
                        <SubmitButton />
                    {/* </form> */}
                    <div className="user-login3party">
                        <p>-or-login-with-</p>
                        {/* <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
                        </fb:login-button>

                        <div id="status"></div>
                        <button onClick="logout()" >Logout</button> */}
                    </div>  
                </div>
            </div>
  );
}

// export default Login;

const { object } = PropTypes;

Login.propTypes = {
  actions: object.isRequired
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
};

export default connect(null, mapDispatch)(Login);
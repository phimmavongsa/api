import React from 'react';
import * as sessionActions from '../actions/sessionActions';
import { useSelector, useDispatch,connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter,useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios'
import './Login.css';
// import Signup from './Signup';


const port = 8000;

const Login = (props) => {
    const user = useSelector( state => state.user );
    const usersession = useSelector( state => state.usersession );
    const dispatch = useDispatch();
    let historynow = useHistory();

    console.log('Props : ', props);
    console.log('user sesion : ', usersession);

    const LogInState = async (history) => {
        await axios.get(`http://localhost:${port}/api/auth`);
        let result = await axios.post(`http://localhost:${port}/api/auth?username=${user.username}&&password=${user.password}`);
        if(result.data.authenticated){
            dispatch( { 
                type:'LOGIN', 
                ...result.data
            } )
            const { login } = props.actions;
            login(user, history);

        }else{
            historynow.push('/');
            // window.location.reload(true);
        }
    }

    const SubmitButton = withRouter(({ history }) => (
        <button
            className = 'btn-login'
            onClick = {() => LogInState(history)}
            type = "submit">
            เข้าสู่ระบบ
        </button>
      ))

      const SignButton = withRouter(({ history }) => (
        <a href='/signup'>
            <button className = 'btn-login'>สมัครสมาชิก</button>
        </a>
      ))
    
    


  return (
        <div className='body-login'>
            <div className="blurred-box">
                <div className="user-login-box">
                    <span className="user-icon"></span>
                    <div className="user-title">เข้าสู่ระบบ</div>
                    
                        <input  type="text" onChange={(e) => dispatch({ type:'CHENG_USERNAME', username: e.target.value })} 
                                autoComplete="on" className="user-username" 
                                name='username' placeholder="Username" 
                                autoFocus required />
                        <input type="password" onChange={(e) => dispatch({ type:'CHENG_PASSWORD', password: e.target.value })} 
                                autoComplete="on" className="user-password" 
                                name='password' placeholder="Password" 
                                required />
                        <div className='btn-box'>
                            <SubmitButton />
                            <SignButton />
                        </div>
                         
                        <div className="user-login3party">
                            <p>-Or-LogIn-With-</p>
                            {/* <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
                            </fb:login-button>

                            <div id="status"></div>
                            <button onClick="logout()" >Logout</button> */}
                        </div>  
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
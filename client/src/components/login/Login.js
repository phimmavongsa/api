import React,{ useEffect } from 'react';
import * as sessionActions from '../actions/sessionActions';
import { useSelector, useDispatch,connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter,useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import PsuPassport from './psupassport.png';
import FacebookLogin from 'react-facebook-login';
import './Login.css';

const Login = (props) => {
    const user = useSelector( state => state.user );
    const dispatch = useDispatch();
    let historynow = useHistory();

    useEffect( () => {
        const updateuser = async() => {
            await axios.get(`${process.env.REACT_APP_API_URL}/auth`);
        }
        updateuser();
      } , [props] )

    const LogInState = async (history) => {
        await axios.post(`${process.env.REACT_APP_API_URL}/auth`, null, {params:user})
        .then( (response) => {
            console.log('POST : ',response.data);
            if(response.data.authenticated){
                dispatch( { 
                    type:'LOGIN', 
                    ...response.data
                } )
                const { login } = props.actions;
                login(response.data, history);
    
            }else{
                historynow.push('/');
                // window.location.reload(true);
            }
          })
          .catch( (error) => {
            console.log(error);
          });
    }

    const SubmitButton = withRouter(({ history }) => (
        <button
            className = 'btn-login'
            onClick = {() => LogInState(history)}
            type = "submit">
            เข้าสู่ระบบ
        </button>
      ));

      const SignButton = (() => (
        <a href='/signup'>
            <button className = 'btn-login'>สมัครสมาชิก</button>
        </a>
      ));

      const responseFacebook = (response) => {
        console.log('facebook:',response);
        const { login } = props.actions;
        let data = {
          userid : response.id,
          username: response.name,
          picture : response.picture.data.url,
          permission :'facebook_user'
          
        }
        login(data, historynow);
      }



  return (
        <div className='body-login'>
            <div className="blurred-box">
                <div className="user-login-box">
                    <span className="user-icon"></span>
                    <div className="user-title">เข้าสู่ระบบ</div>
                    
                        <input  type="text" onChange={(e) => dispatch({ type:'CHENG_USERNAME', username: e.target.value })} 
                                autoComplete="username" className="user-username" 
                                name='username' placeholder="Username" 
                                autoFocus required />
                        <input type="password" onChange={(e) => dispatch({ type:'CHENG_PASSWORD', password: e.target.value })} 
                                autoComplete="current-password" className="user-password" 
                                name='password' placeholder="Password" 
                                required />
                        <div className='btn-box'>
                            <SubmitButton />
                            <SignButton />
                        </div>
                         
                        <div className="user-login3party">
                            <p>- Or login with -</p>
                            <a href='/psuauth'>
                                <img className='psupassport' src={PsuPassport} alt='psupassport' />      
                            </a>
                              
                            <FacebookLogin
                              appId = { process.env.REACT_APP_FACEBOOK_CLIENT_ID }
                              size = "small"
                              isMobile = {true}
                              fields = "name,email,picture"
                              scope = "public_profile"
                              callback = {responseFacebook}
                              icon = "fa-facebook"
                              textButton = "Facebook"
                              
                            />                          
                        </div>  
                </div>
            </div>
        </div>
  );
}

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
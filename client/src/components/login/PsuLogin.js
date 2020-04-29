import React from 'react';
import * as sessionActions from '../actions/sessionActions';
import { useSelector, useDispatch, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import './PsuLogin.css';

const PsuLogin = (props) => {
    const user = useSelector( state => state.user );
    const dispatch = useDispatch();
 
    const LogInState = async (history) => {
        await axios.post(`${process.env.REACT_APP_API_URL}/psu_auth`, null, {params:user})
        .then( (response) => {
            // console.log('POST : ',response.data);
            if(response.data.authenticated){
                dispatch( { 
                    type:'LOGIN', 
                    ...response.data
                } )
                const { login } = props.actions;
                login(response.data, history);
    
            }else{
                window.location.reload(true);
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
      ))


  return (
        <div className='body-login-psu'>
            <div className="blurred-box-psu">
                <div className="user-login-box">
                    <span className="user-icon-psu"></span>
                    <div className="user-title">PSU PASSPORT</div>
                    <input  type="text" onChange={(e) => dispatch({ type:'CHENG_USERNAME', username: e.target.value })} 
                            autoComplete="username" className="user-username" 
                            name='username' placeholder="Username" 
                            autoFocus required />
                    <input type="password" onChange={(e) => dispatch({ type:'CHENG_PASSWORD', password: e.target.value })} 
                            autoComplete="current-password" className="user-password" 
                            name='password' placeholder="Password" 
                            required />
                    <div className='btn-box-psu'>
                        <SubmitButton />
                    </div>   
                </div>
            </div>
        </div>
  );
}


const { object } = PropTypes;

PsuLogin.propTypes = {
  actions: object.isRequired
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
};

export default connect(null, mapDispatch)(PsuLogin);
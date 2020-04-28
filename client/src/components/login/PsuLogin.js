import React,{ useEffect } from 'react';
import * as sessionActions from '../actions/sessionActions';
import { useSelector, useDispatch, connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios'
import './PsuLogin.css';


const port = 8000;

const PsuLogin = (props) => {
    const user = useSelector( state => state.user );
    // const usersession = useSelector( state => state.usersession );
    const dispatch = useDispatch();
    // let historynow = useHistory();

    // console.log('Props : ', props);
    // console.log('user sesion : ', usersession);
    // console.log('user  : ', user);

    useEffect( () => {
        const updateuser = async() => {
            await axios.get(`http://localhost:${port}/api/auth`);
        }
        updateuser();
      } , [props] )

    const LogInState = async (history) => {
        // await axios.post(`http://localhost:${port}/api/psu_auth?username=${user.username}&&password=${user.password}`)
        await axios.post(`http://localhost:${port}/api/psu_auth`, null, {params:user})
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
                // console.log('POST : ',response);
                // historynow.push('/psuauth');
                window.location.reload(true);
            }
          })
          .catch( (error) => {
            console.log('Error :',error);
          });



        // if(result.data.authenticated){
        //     dispatch( { 
        //         type:'LOGIN', 
        //         ...result.data
        //     } )
        //     const { login } = props.actions;
        //     login(user, history);

        // }else{
        //     console.log(result.data)
        //     historynow.push('/psuauth');
        //     // window.location.reload(true);
        // }
    }

    const SubmitButton = withRouter(({ history }) => (
        <button
            className = 'btn-login'
            onClick = {() => LogInState(history)}
            type = "submit">
            เข้าสู่ระบบ
        </button>
      ))

    //   const SignButton = withRouter(({ history }) => (
    //     <a href='/signup'>
    //         <button className = 'btn-login'>สมัครสมาชิก</button>
    //     </a>
    //   ))
    
    


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
                            {/* <SignButton /> */}
                        </div>
                         
                        
                </div>
            </div>
        </div>
  );
}

// export default PsuLogin;

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
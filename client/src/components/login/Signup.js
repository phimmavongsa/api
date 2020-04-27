import React,{ useState } from 'react';
// import * as sessionActions from '../actions/sessionActions';
// import { useSelector, useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux';
import { withRouter,useHistory } from 'react-router-dom';

// import PropTypes from 'prop-types';
import axios from 'axios'
import './Signup.css';


const port = 8000;

const Signup = (props) => {
    // const user = useSelector( state => state.user );
    // const usersession = useSelector( state => state.usersession );
    // const dispatch = useDispatch();
    const [Email, setEmail] = useState('');
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [rePassword, setrePassword] = useState('');
    let history = useHistory();

    const SignupState = async () => {
        if(Password === rePassword){
            let result = await axios.post(`http://localhost:${port}/api/users?email=${Email}&&username=${Username}&&password=${Password}`);
            history.push('/login');
        } else {
            console.log('Password not match');
            alert('โปรดใส่รหัสผ่านให้ถูกต้อง');
            window.location.reload(true);
        }
    
        // await axios.get(`http://localhost:${port}/api/auth`);
        
 
    }

 
  
    const SubmitButton = withRouter(({ history }) => (
        <button
            className = 'btn-signup'
            onClick = {() => SignupState(history)}
            type = "submit">
            สมัครสมาชิก
        </button>
      ))
    


  return (
        <div className='body-signup'>
            <div className="blurred-box-signup">
                <div className="user-login-box-signup">
                    <span className="user-icon-signup"></span>
                    <div className="user-title-signup">สมัครสมาชิก</div>
                    {/* <form   > */}
                    <label htmlFor='email'>Email</label>
                        <input  id='email' type="email" onChange={(e)=> setEmail(e.target.value)} 
                                autoComplete="on" className="user-username" 
                                name='email' placeholder="กรุณากรอก" 
                                autoFocus required />
                        <label htmlFor='username'>UserName</label>
                        <input  id='username' type="text" onChange={(e)=> setUsername(e.target.value)} 
                                autoComplete="on" className="user-username" 
                                name='username' placeholder="กรุณากรอก" 
                                autoFocus required />
                        <label htmlFor='password'>Password</label>
                        <input  id='password' type="password" onChange={(e)=> setPassword(e.target.value)} 
                                autoComplete="on" className="user-password" 
                                name='password' placeholder="กรุณากรอก" 
                                required />
                        <label htmlFor='re-password'>re-Password</label>
                        <input  id='re-password' type="password" onChange={(e)=> setrePassword(e.target.value)} 
                                autoComplete="on" className="user-password" 
                                name='re-password' placeholder="กรุณากรอก" 
                                required />
                        {/* <button type="submit" className="btn" onClick= { withRouter(({ history }) => (() => LogInState(history))) }> Submit </button> */}
                        <SubmitButton />
                    {/* </form> */}
                    <div className="user-login3party-signup">
                        <p>-or-login-with-</p>
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

export default Signup;

// const { object } = PropTypes;

// Login.propTypes = {
//   actions: object.isRequired
// };

// const mapDispatch = (dispatch) => {
//   return {
//     actions: bindActionCreators(sessionActions, dispatch)
//   };
// };

// export default connect(null, mapDispatch)(Signup);
import React,{ useState } from 'react';
import { withRouter,useHistory } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';


// const port = 8000;

const Signup = () => {
    const [Email, setEmail] = useState('');
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [rePassword, setrePassword] = useState('');
    let history = useHistory();

    const SignupState = async () => {
        if( Email && Username && Password && rePassword ){
            if(Password === rePassword){
                // await axios.post(`http://localhost:${port}/api/users?email=${Email}&&username=${Username}&&password=${Password}`);
                await axios.post(`${process.env.REACT_APP_API_URL}/users`, null, 
                {
                    params: { 
                                email : Email,
                                username : Username,
                                password : Password
                            }
                })
                .then( (response) => {
                    alert('สมัครเสร็จเรียบร้อย  สามารถเข้าสู่ระบบได้แล้ว');
                    history.push('/login');
                })
                .catch( (error) => {
                    console.log(error);
                  });

                // alert('สมัครเสร็จเรียบร้อย  สามารถเข้าสู่ระบบได้แล้ว');
                // history.push('/login');

            } else {
                console.log('Password not match');
                alert('โปรดใส่รหัสผ่านให้ถูกต้อง');
                window.location.reload(true);
            }          
        }else{
           alert('โปรดกรอกให้ครบทุกช่อง');
        }
        
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
                    
                    <label htmlFor='email' className="tag">Email</label>
                    <input  id='email' type="email" onChange={(e)=> setEmail(e.target.value)} 
                            autoComplete="email" className="user-username" 
                            name='email' placeholder="กรุณากรอก EMAIL" 
                            required />
                    <label htmlFor='username'>UserName</label>
                    <input  id='username' type="text" onChange={(e)=> setUsername(e.target.value)} 
                            autoComplete="username" className="user-username" 
                            name='username' placeholder="กรุณากรอก USERNAME" 
                            required />
                    <label htmlFor='password'>Password</label>
                    <input  id='password' type="password" onChange={(e)=> setPassword(e.target.value)} 
                            autoComplete="new-password" className="user-password" 
                            name='password' placeholder="กรุณากรอก PASSWORD" 
                            required />
                    <label htmlFor='re-password'>re-Password</label>
                    <input  id='re-password' type="password" onChange={(e)=> setrePassword(e.target.value)} 
                            autoComplete="new-password" className="user-password" 
                            name='re-password' placeholder="กรุณากรอก PASSWORD" 
                            required />
                     
                    <SubmitButton />
                    
                    
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
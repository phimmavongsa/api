import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LogOut from './LogoutButton';
import Logo from './LogoPage.png';
import './Header.css';

const Header = () => {
    const session = useSelector(state => state.session);

    const LoginButton = withRouter(({ history }) => (
        <a href='/login'>
            <button className = 'btn-login-nav'>เข้าสู่ระบบ</button>
        </a>
      ));

     
    return (
        <header>
            <div className='box-container'>
                <img className='logo' src={Logo} alt='Logopage' />

                <nav>
                    <li><a href="/">Home</a></li>
                    {/* <li><a href="#our-work">Work</a></li> */}
                    <li><a href="/covid">Covid-19</a></li>
                    {/* <li><a href="/post">Post</a></li> */}
                    <li><a href="/policy">Policy</a></li>
                    {/* <li><h3>{session.user.username}</h3></li>
                    <li><LogOut /></li> */}

                    {   session.authenticated && 
                        <div className="user-display">
                            <li><a href="/post">Post</a></li>
                            {session.user.picture? <img className="avatar" alt="avatar" src={session.user.picture}  />:<img className="avatar" alt="avatar" src="https://www.w3schools.com/w3images/avatar2.png"  />}
                            <p>{session.user.username}</p>
                            <LogOut />     
                        </div>
                    }
                    {   !session.authenticated && 
                        <LoginButton />
                    }

                </nav>

            </div>
       

    </header>
    )
}

export default Header;
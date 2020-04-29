import React from 'react';
import { useSelector } from 'react-redux';
import LogOut from './LogoutButton';
import Logo from './LogoPage.png';
import './Header.css';

const Header = () => {
    const session = useSelector(state => state.session);

    const LoginButton = (() => (
        <a href='/login'>
            <button className = 'btn-login-nav'>เข้าสู่ระบบ</button>
        </a>
    ));

    return (
        <header>
            <div className='box-container'>
                <img className='logo' src={Logo} alt='Logopage' />
                <nav>
                    {   session.authenticated && 
                        <div className="user-display">
                            <li><a href="/">Home</a></li>
                            <li><a href="/post">สร้างโพสต์</a></li>
                            <li><a href="/covid">Covid-19</a></li>
                            <li><a href="/about">ติดต่อเรา</a></li>
                            <li><a href="/policy">นโยบาย</a></li>
                            {session.user.picture? <img className="avatar" alt="avatar" src={session.user.picture}  />:<img className="avatar" alt="avatar" src="https://www.w3schools.com/w3images/avatar2.png"  />}
                            <p>{session.user.username}</p>
                            <LogOut />     
                        </div>
                    }
                    {   !session.authenticated && 
                        <div className="user-display">
                            <li><a href="/">Home</a></li>
                            <li><a href="/covid">Covid-19</a></li>
                            <li><a href="/policy">นโยบาย</a></li>
                            <li><a href="/about">ติดต่อเรา</a></li>
                            <LoginButton />
                        </div>
                    }
                </nav>
            </div>
    </header>
    )
}

export default Header;
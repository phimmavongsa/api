import React from 'react';
import { useSelector } from 'react-redux';
import LogOut from './LogoutButton';
import Logo from './LogoPage.png';
import './Header.css';

const Header = () => {
    const session = useSelector(state => state.session);
    return (
        <header>
            <div className='box-container'>
                <img className='logo' src={Logo} alt='Logopage' />

                <nav>
                    <li><a href="/">Home</a></li>
                    {/* <li><a href="#our-work">Work</a></li> */}
                    <li><a href="/covid">Features</a></li>
                    {/* <li><a href="#reviews">Reviews</a></li> */}
                    {/* <li><a href="#contact">Contacts</a></li> */}
                    {/* <li><h3>{session.user.username}</h3></li>
                    <li><LogOut /></li> */}

                    <div className="user-display">
                        <img className="avatar" alt="avatar" src="https://www.w3schools.com/w3images/avatar2.png"  />
                        <p>{session.user.username}</p>        
                    </div>
                    <LogOut />

                </nav>

            </div>
       

    </header>
    )
}

export default Header;
import React from 'react';
import { useSelector } from 'react-redux';
import LogOut from './LogoutButton';
import './Header.css';

const Header = () => {
    const session = useSelector(state => state.session);
    return (
        <header>
        <h2><a href="#logo">Website Logo</a></h2>

        <nav>
            <li><a href="#hero">Home</a></li>
            <li><a href="#our-work">Work</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contacts</a></li>
            {/* <li><h3>{session.user.username}</h3></li>
            <li><LogOut /></li> */}

            <div className="user-display">
                <p>{session.user.username}</p>
                {/* <img className="avatar" src="assets/img/avatar.png" alt="user-logo" /> */}
            </div>
            <LogOut />

        </nav>

    </header>
    )
}

export default Header;
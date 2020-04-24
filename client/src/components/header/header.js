import React from 'react';
import './header.css';

const header = () => {

    return (
        <header>
        <h2><a href="#logo">Website Logo</a></h2>

        <nav>
            <li><a href="#hero">Home</a></li>
            <li><a href="#our-work">Work</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contacts</a></li>

            {/* <div className="user-display">
                <p>Nattapon</p>
                <img className="avatar" src="assets/img/avatar.png" alt="user-logo" />
            </div> */}

        </nav>

    </header>
    )
}

export default header;
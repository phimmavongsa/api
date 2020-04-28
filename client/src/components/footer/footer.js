import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <footer>
            <ul>
                <li><a href="/"><i className="fa fa-twitter-square"></i></a></li>
                <li><a href="/"><i className="fa fa-facebook-square"></i></a></li>
                <li><a href="/"><i className="fa fa-snapchat-square"></i></a></li>
                <li><a href="/"><i className="fa fa-pinterest-square"></i></a></li>
                <li><a href="/"><i className="fa fa-github-square"></i></a></li>
            </ul>
            <p>Coppyright &copy; 2020</p>
        </footer>
    )
}

export default Footer;
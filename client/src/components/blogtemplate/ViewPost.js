import React from 'react';
import Navbar from '../header/Header';
import Footer from '../footer/footer';
import './ViewPost.css';

const ViewPost = (props) => {
    const {userid, topic, txt, img} = props.location.state;
    
    const BackButton = (() => (
        <a href='/'>
            <button className = 'btn-login-view'>กลับ</button>
        </a>
    ));

    return (
        <div className='body-view'>
            <Navbar />
            <div className='wrapper-view'>
                <div className='box-view'>
                    <h1>{topic}</h1>
                    <img src={img} alt='imgpost' />
                    <p>&emsp;{txt}</p>
                </div>
                <div className='name-view'>
                    <p>ผู้โพสต์ : {userid}</p>
                    <BackButton />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ViewPost;
import React from 'react';
import Navbar from '../header/Header';
import Footer from '../footer/footer';
import './ViewPost.css';

const ViewPost = (props) => {
    // console.log('view2 :', props.location.state)
    const {userid, topic, txt, img} = props.location.state;

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
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ViewPost;
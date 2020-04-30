import React from 'react';
import Navbar from '../header/Header';
import Footer from '../footer/footer';
import './About.css';
import Profile from './profile.jpg';

const About = () => {

    return (
        <div className='body-about'>
            <Navbar />
            <div className='wrapper-about'>
                <div className='box-about'>
                    <h1>สวัสดีครับ</h1>
                    <img src={Profile} alt='imgabout' />
                    <div className='detail-about'>
                        <p>ชื่อ : นายณัฐพล  สังข์แก้ว (เบสท์)</p>
                        <p>รหัสนักศึกษา : 5835512005</p>
                        <p>คณะ : วิศวกรรมศาสตร์  ภาควิชาวิศวกรรมคอมพิวเตอร์</p>
                        <p>สถานศึกษา : มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</p>
                        <p>E-mail : 5835512005@psu.ac.th</p>
                    </div>          
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;
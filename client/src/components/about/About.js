import React from 'react';
import Navbar from '../header/Header';
import Footer from '../footer/footer';
import './About.css';

const About = () => {

    return (
        <div className='body-about'>
            <Navbar />
            <div className='wrapper-about'>
                <div className='box-about'>
                    <h1>สวัสดีครับ</h1>
                    <img src='https://scontent.furt1-1.fna.fbcdn.net/v/t1.0-9/90086460_236968787482447_6210362194203246592_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_eui2=AeGyf5IG6B2kTQmD8F9cyBZPwNiaIsIdXULA2Joiwh1dQgqQPfG-84hF7CJ8Ki6BqhnDvjXiCgKOlERydMkoRjzW&_nc_ohc=dPt21CWiFgYAX-DYm3q&_nc_ht=scontent.furt1-1.fna&oh=9dc81fadeed0addb7ff8a133cf814f12&oe=5ECF0D99' alt='imgpost' />
                    <div className='detail-about'>
                        <p>ชื่อ : นายณัฐพล  สังข์แก้ว (เบสท์)</p>
                        {/* <p>Name : Nattapon  Sungkaew</p> */}
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
import React from 'react';
import './InputForm.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Navbar from '../header/Header';
import Footer from '../footer/footer';

const InputForm = () => {
    const form = useSelector( state => state.form );
    const session = useSelector( state => state.session);
    const dispatch = useDispatch();

    const addPost = async () => {
        console.log('Form after : ' ,form);
        await axios.post(`${process.env.REACT_APP_API_URL}/posts`, null,
        {
            params: { 
                        userid : session.user.userid,
                        topic : form.topic,
                        txt : form.txt,
                        img: form.img
                    }
        })
        .then( (response) => {
            alert('โพสต์สำเร็จ');
            // console.log(response.data);
        })
        .catch( (error) => {
            console.log(error);
        });
    }

    return(
        <div className='body-post'>
            <Navbar />
            <div className='wrapper-post'>
                <div className='box-post'>
                    <p>ผู้โพสต์ : {session.user.username}</p>
                    <form onSubmit={addPost}>
                        <label htmlFor='topic'>หัวข้อ :</label>
                        <input id='topic' type="text" placeholder="ใส่หัวเรื่อง" onChange={(e) => dispatch({ type:'CHENG_TOPIC', topic: e.target.value })} /><br />

                        <label htmlFor='img'>รูปภาพ :</label>
                        <input id='img' type="text" placeholder="ใส่ Link รูปภาพ" onChange={(e) => dispatch({ type:'CHENG_IMG', img: e.target.value })} /><br />

                        <label htmlFor='post'>เนื้อหา :</label>
                        <textarea id='post' rows="10" cols="20" placeholder="ใส่เนื้อหา" onChange={(e) => dispatch({ type:'CHENG_TXT', txt: e.target.value })} /><br /><br />
            
                        <button className='btn' >ADD POST</button>
                    </form>
                </div>               
            </div>
            <Footer />
        </div>
    )
}

export default InputForm;
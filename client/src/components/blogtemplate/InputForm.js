import React from 'react';
import './InputForm.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Navbar from '../header/Header';
import Footer from '../footer/footer';

// const port = 8080

const InputForm = () => {
    const form = useSelector( state => state.form );
    const session = useSelector( state => state.session);
    const dispatch = useDispatch();

    console.log('Form befor : ' ,form)
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
            alert('สมัครเสร็จเรียบร้อย ');
            console.log(response.data);

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
                    <p>Name : {session.user.username}</p>
                    <form onSubmit={addPost}>
                        <label htmlFor='topic'>Topic :</label>
                        <input id='topic' type="text" placeholder="ใส่หัวเรื่อง" onChange={(e) => dispatch({ type:'CHENG_TOPIC', topic: e.target.value })} /><br />

                        <label htmlFor='img'>URL IMG :</label>
                        <input id='img' type="text" placeholder="ใส่ Link รูปภาพ" onChange={(e) => dispatch({ type:'CHENG_IMG', img: e.target.value })} /><br />

                        <label htmlFor='post'>Post :</label>
                        <textarea id='post' rows="10" cols="20" placeholder="ใส่เนื้อหา" onChange={(e) => dispatch({ type:'CHENG_TXT', txt: e.target.value })} /><br /><br />
            
                        {/* <button className='btn' onClick={addPost}>INSERT DATA</button> */}
                        <button className='btn' >ADD POST</button>
                    </form>
                </div>               
            </div>
            <Footer />
        </div>
    )
}

export default InputForm;
import React from 'react';
import './InputForm.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Navbar from '../header/Header';
import Footer from '../footer/footer';

const port = 8080

const InputForm = () => {
    const dispatch = useDispatch();
    const form = useSelector( state => state.form )
    const students = useSelector( state => state.student )
    console.log('Form : ' ,form)

    const addstudent = async () => {
        await axios.post(`http://localhost:${port}/api/students`, form)
        dispatch( { 
            type:'ADD_STUDENT', 
            student: {
                id: students.length > 0 ? students[ students.length-1 ].id+1 : 0,
                ...form
            } 
        } )
    }

    return(
        <div className='body-post'>
            <Navbar />
            <div className='wrapper'>
    
                <div className='box-post'>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type="text" onChange={(e) => dispatch({ type:'CHENG_NAME', name: e.target.value })} /><br /><br />

                    <label htmlFor='topic'>Topic</label>
                    <input id='topic' type="text" onChange={(e) => dispatch({ type:'CHENG_SURNAME', surname: e.target.value })} /><br /><br />

                    <label htmlFor='post'>Post</label>
                    <input id='post' type="text" onChange={(e) => dispatch({ type:'CHENG_FAC', fac: e.target.value })} /><br /><br />

                    <label htmlFor='img'>URL IMG</label>
                    <input id='img' type="text" onChange={(e) => dispatch({ type:'CHENG_IMG', img: e.target.value })} /><br /><br />             
                    <button className='btn' onClick={addstudent}>INSERT DATA</button>
                </div>
                
                
                
                    
            </div>
            <Footer />
        </div>
    )
}

export default InputForm;
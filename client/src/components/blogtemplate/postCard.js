import React from 'react';
import './PostCard.css';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';

const port = 8000

const PostCard = props => {
    const form = useSelector( state => state.form )
    const dispatch = useDispatch();

    const deleteStudent = async () => {
        await axios.delete(`http://localhost:${port}/api/students/${props.id}`)
        dispatch( {type: 'DEL_STUDENT', id: props.id} )
    }

    const updateStudent = async () => {
        await axios.put(`http://localhost:${port}/api/students/${props.id}`,form)
        dispatch( { type: 'UPDATE_STUDENT', 
                    id: props.id,
                    student: { ...form, id: props.id }
                } )
    }
  
    return (
        <div className='sec-items'>
            <div className='sec-img'>
                <h2>{props.topic}</h2>
                <img src={`${props.img}`} alt='img' />
            </div>
            <p>{props.txt}</p>
            <div className='sec-bnt'>
                <button onClick={updateStudent}>Update</button>
                <button onClick={deleteStudent}>Delete</button>
            </div>
        </div>
    )
}

export default PostCard;
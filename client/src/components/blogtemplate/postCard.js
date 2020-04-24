import React from 'react';
import './postCard.css';
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'

const port = 8080
const postCard = props => {

    const dispatch = useDispatch();
    const form = useSelector( state => state.form )

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
                <h2>{props.fac}</h2>
                <img src={`${props.img}`} alt='img' />
            </div>
            <p>{props.name} {props.surname}</p>
            <div className='sec-bnt'>
                <button onClick={updateStudent}>Update</button>
                <button onClick={deleteStudent}>Delete</button>
            </div>
        </div>
    )
}

export default postCard;
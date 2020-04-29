import React from 'react';
import './PostCard.css';
// import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import ViewPost from './ViewPost';
// import axios from 'axios';



const PostCard = props => {
    let history = useHistory(); 

    const viewpost = () => {
        // console.log('view : ' , props); 

        history.push({
            pathname: '/view',
            state: { ...props }
          })
          

    }



    return (
        <div className='sec-items'>
            <div className='sec-img'>
                <h2>{props.topic}</h2>
                <img src={`${props.img}`} alt='img' />
            </div>
            <p>&emsp;{props.txt}</p>
            <div className='sec-bnt'>
                <button onClick={viewpost} >แสดงรายละเอียด</button>
            </div>
        </div>
    )
}

export default PostCard;
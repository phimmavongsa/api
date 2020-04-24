import React, { useEffect } from 'react'
import PostCard from './postCard';
import './postList.css';
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
const  port = 8080

const postList = props => {

    const posts = useSelector(state => state.post);
    // const dispatch = useDispatch(); 

    // const getStudents = async () => {
    //     const result = await axios.get(`http://localhost:${port}/api/students`)
    //     dispatch({ type: 'GET_STUDENTS', students: result.data })
    // }

    // useEffect(() => {
    //     const getPosts = async () => {
    //         const result = await axios.get(`http://localhost:${port}/api/students`)     
    //         dispatch({ type: 'GET_POSTS', posts: result.data }) 
    //     }
    //     getPosts()
    //     // eslint-disable-next-line
    //   }, [props])

    if (!posts || !posts.length)
        return (<h2>No Posts</h2>)

    return (
        
            <div className='cd-container'>
                <div className='section-grid'>
                {
                    posts.map((post, index) => (
                            <PostCard  {...post} key={index} />
                    ))
                }
                </div>
             </div>
        

    )
}

export default postList;
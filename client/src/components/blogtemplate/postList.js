import React from 'react';
import PostCard from './PostCard';
import './PostList.css';
import { useSelector } from 'react-redux';

const PostList = () => {
    const posts = useSelector(state => state.post);

    return (
        <section className='post-body'>
            <h3 className="title">Blog Items List</h3>
            <div className='cd-container'>
                <div className='section-grid'>
                {
                    posts.map((post, index) => (
                            <PostCard  {...post} key={index} />
                    ))
                }
                </div>
             </div>

        </section>
    )
}

export default PostList;
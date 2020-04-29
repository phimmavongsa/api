import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import Navbar from '../header/Header';
import Coverpage from '../coverpage/coverpage';
import PostList from '../blogtemplate/PostList';
import Features from '../features/Features';
import Footer from '../footer/footer';

const Homepage = () => {
  const posts = useSelector(state => state.post);
  const dispatch = useDispatch(); 

  useEffect(() => {
    const getPosts = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/posts`)
        .then( (response) => {
            if(!response.data.message){
                dispatch({ type: 'GET_POSTS', posts: response.data });
            }
        })
        .catch( (error) => {
            console.log(error);
        });

    }
    getPosts();
    // eslint-disable-next-line
  }, []);

  if (!posts || !posts.length) {
    return (
      <div>
        <Navbar />
        <h2 style={{textAlign:'center',margin:'300px 0'}}>
          Oop!, Something Broke!!! <br />
          Wait a minute for server response.
        </h2>
        <Footer />  
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <Coverpage />
      <PostList />
      <Features />
      <Footer />  
    </div>
  );
}

export default Homepage;

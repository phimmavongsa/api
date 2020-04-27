import React from 'react';
import Navbar from '../header/Header';
import Coverpage from '../coverpage/coverpage';
import PostLayOut from '../blogtemplate/PostLayOut'
// import CoronaPage from './components/corona/corona';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Coverpage />
      <PostLayOut />
      {/* <CoronaPage /> */}
     
    </div>
  );
}

export default Homepage;

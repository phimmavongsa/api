import React from 'react';
import Navbar from '../header/Header';
import Coverpage from '../coverpage/coverpage';
import PostLayOut from '../blogtemplate/PostLayOut'
import Footer from '../footer/footer'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Coverpage />
      <PostLayOut />
      <Footer />  
    </div>
  );
}

export default Homepage;

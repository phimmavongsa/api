import React from 'react';
import './App.css';

import Navbar from './components/header/header';
import Coverpage from './components/coverpage/coverpage';
import PostLayout from './components/blogtemplate/postLayout'
import CoronaPage from './components/corona/corona';

const App = () => {
  return (
    <div>
      <Navbar />
      <Coverpage />
      <PostLayout />
      {/* <CoronaPage /> */}
     
    </div>
  );
}

export default App;

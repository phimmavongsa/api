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


// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as sessionActions from '../actions/sessionActions';
// import LogoutButton from './LogoutButton';
// import Navbar from '../header/header';
// import Coverpage from '../coverpage/coverpage';
// import PostLayOut from '../blogtemplate/PostLayOut'

// const Home = ({ actions: { logout }, user, authenticated }) => (
//   <div>
//     <h3>Welcome {user.email}</h3>
//     <h5>{authenticated ? 'You are authenticated :)' : 'Error'}</h5>
//     <LogoutButton />
  
//         <Navbar />
//         <Coverpage />
//         <PostLayOut />
//         {/* <CoronaPage /> */}
 
//     </div>
// );

// const { object, bool } = PropTypes;

// Home.propTypes = {
//   actions: object.isRequired,
//   user: object.isRequired,
//   authenticated: bool.isRequired
// };

// const mapState = (state) => ({
//   user: state.session.user,
//   authenticated: state.session.authenticated
// });

// const mapDispatch = (dispatch) => {
//   return {
//     actions: bindActionCreators(sessionActions, dispatch)
//   };
// };

// export default connect(mapState, mapDispatch)(Home);
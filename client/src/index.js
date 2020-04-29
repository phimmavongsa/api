import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import {store} from './store/store';
import * as serviceWorker from './serviceWorker';
import { sessionService } from 'redux-react-session';

const validateSession = (session) => {
    // check if your session is still valid
    return true;
  }
  const options = { refreshOnCheckAuth: true, redirectPath: '/home', driver: 'COOKIES', validateSession };
  
  sessionService.initSessionService(store, options)
    .then(() => console.log('Redux React Session is ready and a session was refreshed from your storage'))
    .catch(() => console.log('Redux React Session is ready and there is no session in your storage'));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// serviceWorker.register();

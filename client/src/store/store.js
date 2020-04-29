import { createStore, combineReducers, applyMiddleware } from "redux";
import { sessionReducer } from 'redux-react-session';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const initialForm = {
    userid: '',
    img:'',
    topic:'',
    txt: ''
}

const formReducer = (data = initialForm, action) => {
    switch(action.type) {
        case 'CHENG_USERID' : 
            return {...data, userid: action.userid};
        case 'CHENG_IMG' : 
            return {...data, img: action.img};
        case 'CHENG_TOPIC' : 
            return {...data, topic: action.topic};
        case 'CHENG_TXT' : 
            return {...data, txt: action.txt};
        default :
            return data
    }
}

const initialUser = {
    username:'',
    password:'',

}

const userReducer = (userdata = initialUser, action) => {
    switch(action.type) {
        case 'CHENG_USERNAME' : 
            return {...userdata, username: action.username}
        case 'CHENG_PASSWORD' : 
            return {...userdata, password: action.password}
        default :
            return userdata
    }
}

// const initialUserSession = {
//     user:{ 
//             userid : null,
//             username : null,
//             permission :null
//         },
//     authenticated : false,
//     loginstate : false
// }

// const userSessionReducer = (session = initialUserSession, action) => {
//     switch(action.type) {
//         case 'LOGIN' : 
//             return {...session, user: { 
//                                         userid : action.userid,
//                                         username : action.username,
//                                         permission : action.permission
//                                     },
//                                 authenticated : true,
//                                 loginstate : true
//                     }
//         case 'LOGOUT' : 
//             return {...session, user: { 
//                                         userid : null,
//                                         username : null,
//                                         permission : null
//                                     },
//                                 authenticated : true,
//                                 loginstate : true
//                     }
//         default :
//             return session
//     }
// }



const postReducer = (posts = [], action) => {
    switch(action.type) {
        case 'GET_POSTS' : 
            return action.posts;   //action.payload
        case 'ADD_POST' :
            return [...posts, action.post];
        default :
            return posts ;
    }
}

const reducers = combineReducers({
    user: userReducer,
    post: postReducer,
    form: formReducer,
    // usersession: userSessionReducer,
    session: sessionReducer
})

export const store = createStore(reducers, applyMiddleware(logger,thunk));

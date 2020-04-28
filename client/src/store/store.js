import { createStore, combineReducers, applyMiddleware } from "redux";
import { sessionReducer } from 'redux-react-session';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'

// const initialForm = {
//     name: '',
//     surname:'',
//     fac:'',
//     img: ''
// }

// const formReducer = (data = initialForm, action) => {
//     switch(action.type) {
//         case 'CHENG_NAME' : 
//             return {...data, name: action.name};
//         case 'CHENG_SURNAME' : 
//             return {...data, surname: action.surname};
//         case 'CHENG_FAC' : 
//             return {...data, fac: action.fac};
//         case 'CHENG_IMG' : 
//             return {...data, img: action.img};
//         default :
//             return data

//     }

// }

const initialForm = {
    userid: '',
    name:'',
    img:'',
    topic:'',
    txt: ''
}

const formReducer = (data = initialForm, action) => {
    switch(action.type) {
        case 'CHENG_USERID' : 
            return {...data, userid: action.userid};
        case 'CHENG_NAME' : 
            return {...data, name: action.name};
        case 'CHENG_IMG' : 
            return {...data, ing: action.img};
        case 'CHENG_TONPIC' : 
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

// const studentReducer = (students = [], action) => {
//     switch(action.type) {
//         case 'GET_STUDENTS' : 
//             return action.students;   //action.payload
//         case 'ADD_STUDENT' :
//             return [...students, action.student];
//         case 'DEL_STUDENT' :
//             return students.filter(student => +student.id !== +action.id);
//         case 'UPDATE_STUDENT' :
//             return students.map(student => {
//                 if(+student.id === +action.id)
//                     return action.student;
//                 else return student;
//             })
//         default :
//             return students ;
//     }
// }

const postReducer = (posts = [], action) => {
    switch(action.type) {
        case 'GET_POSTS' : 
            return action.posts;   //action.payload
        case 'ADD_POST' :
            return [...posts, action.post];
        // case 'DEL_POST' :
        //     return posts.filter(post => +post.id !== +action.id);
        // case 'UPDATE_STUDENT' :
        //     return posts.map(post => {
        //         if(+post.id === +action.id)
        //             return action.post;
        //         else return post;
        //     })
        default :
            return posts ;
    }
}

const reducers = combineReducers({
    // student: studentReducer,
    user: userReducer,
    post: postReducer,
    form: formReducer,
    // usersession: userSessionReducer,
    session: sessionReducer
})

export const store = createStore(reducers, applyMiddleware(logger,thunkMiddleware));

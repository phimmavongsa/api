import { createStore, combineReducers, applyMiddleware } from "redux";
import { sessionReducer } from 'redux-react-session';
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

const userReducer = (userdatas = [], action) => {
    switch(action.type) {
        case 'GET_USERDATA' :
            return action.userdatas
        case 'ADD_USERDATA' :
            return [...userdatas, action.userdata]
        default :
            return userdatas
    }
}

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
        case 'DEL_POST' :
            return posts.filter(post => +post.id !== +action.id);
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
    session: sessionReducer
})

export const store = createStore(reducers, applyMiddleware(logger));

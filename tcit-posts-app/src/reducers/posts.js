import { GET_POSTS, DELETE_POSTS, CREATE_POSTS } from './types.js';


const postsReducer = (state = [], action)=>{
    switch(action.type){
        case GET_POSTS:
            return [...action.payload]
        case DELETE_POSTS:
            return "klk"
        case CREATE_POSTS:
            return "klk"
        default:
            return state;
    }
}

export default postsReducer;

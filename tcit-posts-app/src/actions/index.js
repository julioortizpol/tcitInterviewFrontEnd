import { GET_POSTS, DELETE_POSTS, CREATE_POSTS } from './types.js';
import postsServices from "../service/posts";


export const getPosts = () => {
    return (dispatch) => {
        return postsServices.getPosts().then((posts) => {
            dispatch({
                type: GET_POSTS,
                payload: posts
            })
          });
       
    };
};
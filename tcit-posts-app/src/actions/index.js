import { GET_POSTS, DELETE_POSTS, CREATE_POSTS, FILTER_POSTS } from './types.js';
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

export const deletePost = (data) =>{
    return (dispatch) => {
        return postsServices.deletePost(data).then((response) => {
            if(!response.error){
                dispatch({
                    type: DELETE_POSTS,
                    payload: data
                })
              }
            
          });
       
    };
}

export const filterPosts = ((data)=> {
    return {type:FILTER_POSTS, payload:data}
})

export const createPost = (data)=>{
    return (dispatch) => {
        return postsServices.createPost(data).then(response =>{
            if(!response.error){
                let [post] = response.data
                dispatch({
                    type: CREATE_POSTS,
                    payload: post
                })
            }
          })
    }
}
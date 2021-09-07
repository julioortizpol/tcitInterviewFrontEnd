import {API_URL} from "../utils/config";
import axios from "axios";

const getPosts = () => {
  return axios.get(`${API_URL}/posts`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Posts Error: ", error);
      return [];
    });
};

const deletePost = (data)=> {
  const {postid,name,description} = data;
  return axios
    .delete(`${API_URL}/posts/${postid}`,{name,description})
    .then((response) => {
      return response
    }).catch((error) => {
      console.log('Post not deleted Error: ', error)
      return {error:error}
    });
}

const createPost = (data)=> {
  const {name,description} = data;
  return axios
    .post(`${API_URL}/posts/`,{name,description})
    .then((response) => {
      return response
    }).catch((error) => {
      console.log('Post not created Error: ', error)
      return {error:error}
    });
}


export default {getPosts,deletePost,createPost}

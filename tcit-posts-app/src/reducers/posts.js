import { GET_POSTS, DELETE_POSTS, CREATE_POSTS, FILTER_POSTS  } from '../actions/types';


const postsReducer = (posts = {posts: [], tableRowsPosts: []}, action)=>{
    const {type, payload} = action
    let postsData;
    let tableRowsPostsData;
    switch(type){
        case GET_POSTS:
            return {posts: payload, tableRowsPosts: payload}

        case DELETE_POSTS:
            postsData = posts.posts.filter(({postid}) => postid != payload.postid)
            tableRowsPostsData = posts.tableRowsPosts.filter(({postid}) => postid != payload.postid)
            return {posts:postsData, tableRowsPosts: tableRowsPostsData}

        case CREATE_POSTS:
            postsData = [...posts.posts, payload]
            tableRowsPostsData = [...posts.tableRowsPosts, payload]
            return {posts:postsData, tableRowsPosts: tableRowsPostsData}
            
        case FILTER_POSTS:
            let postFilter = posts.posts.filter(
                ({name}) => 
                  name.toUpperCase().includes(payload.filterValue.toUpperCase())
              )
            return {posts:posts.posts, tableRowsPosts:postFilter}

        default:
            return posts;
    }
}

export default postsReducer;

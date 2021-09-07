import { useEffect, useState } from "react";
import "./App.css";
import postsServices from "./service/posts";
import {useSelector} from 'react-redux';
import PostsList from './components/postsList';
import PostSearch from './components/postSearch';
import CreatePost from "./components/createPost";
function App() {
  const reduxState = useSelector(state =>state)
  const [posts, setPosts] = useState([]);
  const [postsRows, setpostsRows] = useState([]);
  const [loading, setLoading] = useState({
    loading: false,
    service: "undefined",
  });

  useEffect(() => {
    postsServices.getPosts().then((posts) => {
      setLoading({ loading: true, service: "undefined" });
      setPosts(posts);
    });
  }, []);

  useEffect(() => {
    setpostsRows(posts)
    console.log(reduxState)
  }, [posts]);

  const getPostTableRows = () => {
    return postsRows != undefined && postsRows.length != 0 ? (
      postsRows.map((postrow) => {
        let { postid, name, description } = postrow;
        return (
          <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td>
              <button
                type="button"
                onClick={() => {
                  
                  postsServices.deletePost(postrow).then(response =>{
                    if(!response.error){
                      let filterPosts = posts.filter(
                        (postToBeFilter) => postToBeFilter.postid != postid
                      );
                      setPosts(filterPosts);
                    }
                  })
                }}
              >
                Eliminar
              </button>
            </td>
          </tr>
        );
      })
    ) : (
      <div></div>
    );
  };

  const createPost = (event) =>{
    const [nameInput, descriptionInput] = event.target
    if(nameInput.value && descriptionInput.value){
      let post = {name:nameInput.value,description:descriptionInput.value}
      postsServices.createPost(post).then(response =>{
        if(!response.error){
          setPosts([...posts, post]);
        }
      })
    }
    event.preventDefault();
  }

  const filterByName = (event)=>{
    const [searchInput] = event.target
    let filterPosts = posts.filter(
      (postToBeFilter) => 
        postToBeFilter.name.toUpperCase().includes(searchInput.value.toUpperCase())
      
    );
    setpostsRows(filterPosts);
    event.preventDefault();
  }

  return (
    <div className="App">
        <PostSearch/>
        <PostsList/>
        <CreatePost/>
    </div>
  );
}

export default App;

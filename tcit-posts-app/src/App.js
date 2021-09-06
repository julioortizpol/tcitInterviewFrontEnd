import { useEffect, useState } from "react";
import "./App.css";
import postsServices from "./service/posts";
function App() {
  const [posts, setPosts] = useState([]);
  const [postsRows, setpostsRows] = useState([]);
  const [loading, setLoading] = useState({
    loading: false,
    service: "undefined",
  });

  useEffect(() => {
    postsServices.getPosts().then((posts) => {
      console.log("Posts: " + posts);
      setLoading({ loading: true, service: "undefined" });
      setPosts(posts);
    });
  }, []);

  useEffect(() => {
    setpostsRows(posts)
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
      <form onSubmit = {filterByName}>
        <input
          name="search"
          placeholder="Filtro de nombre"
          id="search"
          type="text"
          className="inputSeacrh"
        />
        <input type="submit" value="Buscar" className="inputSubmit" />
      </form>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Decripcion</th>
          <th>Accion</th>
        </tr>
        {getPostTableRows()}
      </table>
      <div>
        <form onSubmit={createPost}>
          <input
            name="name"
            placeholder="Nombre"
            id="name"
            type="text"
            className="inputName"
          />
          <input
            name="description"
            placeholder="Descripcion"
            id="description"
            type="text"
          />
          <input type="submit" value="Crear" className="inputSubmit" />
        </form>
      </div>
    </div>
  );
}

export default App;

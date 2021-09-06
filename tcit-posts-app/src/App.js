import { useEffect, useState } from "react";
import "./App.css";
import postsServices from "./service/posts";
function App() {
  const [posts, setPosts] = useState([]);
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

  const getPostTableRows = () => {
    return posts != undefined && posts.length != 0 ? (
      posts.map((post) => {
        console.log(post);
        let { postid, name, description } = post;
        return (
          <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td>
              <button
                type="button"
                onClick={() => {
                  let filterPosts = posts.filter(
                    (post) => post.postid != postid
                  );
                  postsServices.deletePost({ postid, name, description });
                  setPosts(filterPosts);
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
      console.log("bobo")
    }
    event.preventDefault();
  }

  return (
    <div className="App">
      <form>
        <input
          name="name"
          placeholder="Nombre"
          id="name"
          type="text"
          className="inputName"
        />
        <input type="submit" value="Crear" className="inputCreate" />
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
          <input type="submit" value="Crear" className="inputCreate" />
        </form>
      </div>
    </div>
  );
}

export default App;

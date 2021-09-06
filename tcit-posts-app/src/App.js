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
        console.log(post)
        let { postid, name, description } = post;
        return (
          <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td>
              <button
                type="button"
                onClick={() => {
                  let filterPosts = posts.filter(post => post.postid != postid);
                  postsServices.deletePost({ postid, name, description });
                  setPosts(filterPosts)
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

  return (
    <div className="App">
      <table>
        <tr>
          <th>Nombre</th>
          <th>Decripcion</th>
          <th>Accion</th>
        </tr>
        {getPostTableRows()}
      </table>
      <div class="your-class">

  <label for="First_Name">First Name:</label>
  <input name="first_name" id="First_Name" type="text" />
  <label for="Name">Last Name:</label>
  <input name="last_name" id="Last_Name" type="text" /> 

</div>
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, deletePost } from "../actions/index";

function PostsList() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <table>
      <tbody>
        <tr>
          <th>Nombre</th>
          <th>Decripcion</th>
          <th>Accion</th>
        </tr>
        {posts.tableRowsPosts != undefined && posts.tableRowsPosts.length != 0 ? (
          posts.tableRowsPosts.map((post) => {
            let { postid, name, description } = post;
            return (
              <tr key = {postid}>
                <td>{name}</td>
                <td>{description}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(deletePost(post));
                    }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })
        ) : (
          null
        )}
        </tbody>
      </table>
    </div>
  );
}

export default PostsList;

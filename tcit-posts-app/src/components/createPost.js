import {createPost} from '../actions/index'
import { useDispatch } from "react-redux";
function CreatePost(){
  
    const dispatch = useDispatch();
    
    const createPostAction = (event) =>{
        const [nameInput, descriptionInput] = event.target
        if(nameInput.value && descriptionInput.value){
          let post = {name:nameInput.value,description:descriptionInput.value}
          dispatch(createPost(post))
        }
        event.preventDefault();
      }

    return(
        <div>
        <form onSubmit={createPostAction}>
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
      )
}

export default CreatePost
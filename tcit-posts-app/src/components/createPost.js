import {createPost} from '../actions/index'
import { useDispatch } from "react-redux";
import {useState} from 'react'
function CreatePost(){
    const [nameInput,setNameInput] = useState("")
    const [descriptionInput,setDescriptionInput] = useState("")
    const dispatch = useDispatch();
    
    const createPostAction = (event) =>{
        const [nameInput, descriptionInput] = event.target
        if(nameInput.value && descriptionInput.value){
          let post = {name:nameInput.value,description:descriptionInput.value}
          dispatch(createPost(post))
        }
        setDescriptionInput("")
        setNameInput("")
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
            value = {nameInput}
            onChange = {(event)=>{
              setNameInput(event.target.value)
            }}
            className="inputName"
          />
          <input
            name="description"
            placeholder="Descripcion"
            id="description"
            type="text"
            value = {descriptionInput}
            onChange = {(event)=>{
              setDescriptionInput(event.target.value)
            }}
          />
          <input type="submit" value="Crear" className="inputSubmit" />
        </form>
      </div>
      )
}

export default CreatePost
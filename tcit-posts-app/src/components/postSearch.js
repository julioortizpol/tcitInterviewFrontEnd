import {filterPosts} from '../actions/index'
import { useDispatch } from "react-redux";
function PostSearch(){
  
    const dispatch = useDispatch();

    const filterByName = (event)=>{
      const [searchInput] = event.target
      dispatch(filterPosts({filterValue:searchInput.value}))
      event.preventDefault();
    }

    const searchInputTextTrack = (event)=>{
      if(event.target.value == ""){
      dispatch(filterPosts({filterValue:""}))
        
      }
     
    }

    return(
    <form onSubmit = {filterByName}>
        <input
          name="search"
          placeholder="Filtro de nombre"
          id="search"
          type="search"
          className="inputSeacrh"
          onChange = {searchInputTextTrack}
        />
        <input type="submit" value="Buscar" className="inputSubmit" />
      </form>)
}

export default PostSearch
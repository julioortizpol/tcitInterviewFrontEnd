import {filterPosts} from '../actions/index'
import { useDispatch, useSelector } from "react-redux";
import {useEffect, useState, useRef} from 'react'
function PostSearch(){
  
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    


    const filterByName = (event)=>{
      const [searchInput] = event.target
      dispatch(filterPosts({filterValue:searchInput.value}))
        event.preventDefault();
    }


    return(
    <form onSubmit = {filterByName}>
        <input
          name="search"
          placeholder="Filtro de nombre"
          id="search"
          type="text"
          className="inputSeacrh"
        />
        <input type="submit" value="Buscar" className="inputSubmit" />
      </form>)
}

export default PostSearch
import postsReducer from './posts'
import { combineReducers } from 'redux';

export default combineReducers({
  posts:postsReducer
});
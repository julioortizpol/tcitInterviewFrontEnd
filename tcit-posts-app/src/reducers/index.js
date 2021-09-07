import postsReducer from './posts'

export default function rootReducer(state = {}, action) {
  // always return a new object for the root state
  return {
    posts: postsReducer,
  }
}
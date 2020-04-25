import { POST_ACTIONS } from '../actions/types'

const initalState = {
  posts: [],
  currPost: {},
  comments: []
}

const BlogReducer = (state = initalState, action) => {
  switch (action.type) {
    case POST_ACTIONS.FETCH:
      return {
        ...state,
        currPost: action.payload
      }
    case POST_ACTIONS.FETCH_ALL:
      return {
        ...state,
        posts: action.payload.posts
      }
    default:
      return state
  }
}

export default BlogReducer
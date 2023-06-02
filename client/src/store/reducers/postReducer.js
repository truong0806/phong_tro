import actionTypes from '../action/actionTypes'
const initState = {
  posts: [],
  msg: '',
  count: 0,
  posts_by_categories: [],
}
const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
    case actionTypes.GET_POSTS_LIMIT:
      return {
        ...state,
        posts: action.posts || [],
        msg: action.msg || '',
        count: action.count || 0,
      }
    case actionTypes.GET_POSTS_BY_CATEGORY:
      return {
        ...state,
        posts_by_categories: action.posts_by_categories || [],
        msg: action.msg || '',
        count: action.count || 0,
      }
    default:
      return state
  }
}

export default postReducer

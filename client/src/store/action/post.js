import actionTypes from './actionTypes'
import { apiGetPosts, apiGetPostsLimit } from '../../service/post'

export const getPosts = () => async (dispatch) => {
  try {
    const response = await apiGetPosts()
    //console.log(response)
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS,
        posts: response.data.response,
      })
    } else {
      dispatch({
        type: actionTypes.REGISTER_FAIL,
        msg: response.data.msg,
      })
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS,
      posts: null,
    })
  }
}
export const GetPostsLimit = (page) => async (dispatch) => {
  try {
    const response = await apiGetPostsLimit(page)
    //console.log(response)
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS_LIMIT,
        posts: response.data.response?.rows,
        count: response.data.response?.count,
      })
    } else {
      dispatch({
        type: actionTypes.GET_POSTS_LIMIT,
        msg: response.data.msg,
      })
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS_LIMIT,
      posts: null,
    })
  }
}

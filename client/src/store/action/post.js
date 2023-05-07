import actionTypes from './actionTypes'
import { apiGetPosts } from '../../service/post'

export const getPosts = () => async (dispatch) => {
  try {
    const response = await apiGetPosts()
    console.log(response)
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

import actionTypes from './actionTypes';
import {
  apiGetPosts,
  apiGetPostsLimit,
  apiGetPostsLimitAdmin
} from '../../service/post';
export const getPosts = () => async (dispatch) => {
  try {
    const response = await apiGetPosts();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS,
        posts: response.data.response.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        ),
      });
    } else {
      dispatch({
        type: actionTypes.GET_POSTS,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS,
      posts: null,
    });
  }
};
export const GetPostsLimit = (query) => async (dispatch) => {
  try {
    const response = await apiGetPostsLimit(query);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS_LIMIT,
        posts_limit: response.data.response?.rows,
        count: response.data.response?.count,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POSTS_LIMIT,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS_LIMIT,
      posts_limit: null,
    });
  }
};
export const GetPostsLimitAdmin = (query) => async (dispatch) => {
  try {
    const response = await apiGetPostsLimitAdmin(query);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS_LIMIT_ADMIN,
        posts_limit_admin: response.data.response?.rows,
        count: response.data.response?.count,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POSTS_LIMIT_ADMIN,
        msg: response.data.msg,
        posts_limit_admin: null
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS_LIMIT_ADMIN,
      posts_limit_admin: null,
    });
  }
};
export const ClearPostsLimit = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.CLEAR_POST,
      posts_limit: [],
      count: 0,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS_LIMIT,
      posts_limit: null,
    });
  }
};

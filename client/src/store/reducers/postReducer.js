import actionTypes from '../action/actionTypes';

const initState = {
  posts: [],
  msg: '',
  count: 0,
  posts_by_categories: [],
  posts_limit: [],
  posts_limit_admin: []
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.posts || [],
        msg: action.msg || '',
      };
    case actionTypes.GET_POSTS_LIMIT:
      return {
        ...state,
        posts_limit: action.posts_limit || [],
        msg: action.msg || '',
        count: action.count || 0,
      };
    case actionTypes.GET_POSTS_LIMIT_ADMIN:
      return {
        ...state,
        posts_limit_admin: action.posts_limit_admin || [],
        msg: action.msg || '',
        count: action.count || 0,
      };
    case actionTypes.CLEAR_POST:
      return {
        ...state,
        posts_limit: [],
        msg: '',
        count: 0,
      };

    case actionTypes.GET_POSTS_BY_CATEGORY:
      return {
        ...state,
        posts_by_categories: action.posts_by_categories || [],
        msg: action.msg || '',
        count: action.count || 0,
      };
    case actionTypes.EDIT_POST:
      return {
        ...state,
        dataEdit: action.dataEdit || {}
      }
    default:
      return state;
  }
};

export default postReducer;

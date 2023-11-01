import actionTypes from '../action/actionTypes';

const initState = {
  isLoggedIn: false,
  accessToken: '',
  refreshToken: '',
  phone: '',
  msg: '',
  update: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        accessToken: action.data.accessToken,
        refreshToken: action.data.refreshToken,
      };
    case actionTypes.REGISTER_FAIL:
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        msg: action.data,
        accessToken: null,
        refreshToken: null,
        update: !state.update,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        accessToken: null,
        refreshToken: null,
        msg: '',
      };
    case actionTypes.REFRESH_TOKEN:
      return {
        ...state,
        isLoggedIn: true,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };
    case actionTypes.REFRESH_TOKEN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        accessToken: null,
        refreshToken: null,
        msg: action.msg,
      };
    default:
      return state;
  }
};

export default authReducer;

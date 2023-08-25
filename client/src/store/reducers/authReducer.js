import actionTypes from '../action/actionTypes';

const initState = {
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null,
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
        phone: action.data,
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
        msg: '',
        accessToken: null,
        refreshToken: null,
      };
    case actionTypes.REFRESH_TOKEN:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default authReducer;

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
        phone: action.data,
      };
    case actionTypes.REGISTER_FAIL:
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        msg: action.data,
        update: !state.update,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        msg: '',
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

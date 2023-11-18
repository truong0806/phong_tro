import actionTypes from '../action/actionTypes';

const initState = {
  isLoggedIn: false,
  accessToken: '',
  refreshToken: '',
  phone: '',
  msgLoginSuccess: '',
  msgRegister: '',
  msgRegisterSuccess: '',
  update: false,
};

const authReducer = (state = initState, action) => {
  console.log(
    '🚀 ~ file: authReducer.js:16 ~ authReducer ~ action.type:',
    action.type
  );
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        accessToken: action?.data?.accessToken,
        refreshToken: action?.data?.refreshToken,
        msgRegisterSuccess: action.data.msg || '',
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        accessToken: action?.data?.accessToken,
        refreshToken: action?.data?.refreshToken,
        msgLoginSuccess: action.data.msg || '',
      };
    case actionTypes.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        msgRegister: action.data || '',
        accessToken: null,
        refreshToken: null,
        update: !state.update,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        msgLogin: action.data || '',
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
    case actionTypes.CLEAR_MSG_AUTH:
      return {
        ...state,
        msgLogin: '',
        msgRegister: '',
        msgRegisterSuccess: '',
        msgLoginSuccess: '',
      };
    default:
      return state;
  }
};

export default authReducer;

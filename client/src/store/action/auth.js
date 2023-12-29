import actionTypes from './actionTypes';
import { apiRegister, apiLogin, apiRefeshToken } from '../../service/auth';

export const register = (payload) => async (dispatch) => {
  try {
    const response = await apiRegister(payload);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        data: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.REGISTER_FAIL,
        data: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_FAIL,
      data: null,
    });
  }
};
export const login = (payload) => async (dispatch) => {
  try {
    const response = await apiLogin(payload);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        data: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.LOGIN_FAIL,
        data: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      data: null,
    });
    //dispatch({ type: actionTypes.LOGOUT });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: actionTypes.LOGOUT,
  });
};
export const refreshToken = (refreshToken) => async (dispatch) => {
  const response = await apiRefeshToken(refreshToken);
  console.log('🚀 ~ file: auth.js:66 ~ refreshToken ~ response:', response);
  if (response?.data.err === 0) {
    dispatch({
      type: actionTypes.REFRESH_TOKEN,
      accessToken: response.data.accessToken,
      refreshToken: refreshToken,
    });
  } else {
    dispatch({
      type: actionTypes.REFRESH_TOKEN_FAIL,
      msg: response.data.msg,
    });
  }
  // dispatch({ type: actionTypes.LOGOUT });
};
export const setAuthTokens =
  (accessToken, refreshToken) => async (dispatch) => {
    dispatch({
      type: actionTypes.REFRESH_TOKEN,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  };
export const setMsgExpiredToken = (type) => async (dispatch) => {
  dispatch({
    type: type === 'login' ? actionTypes.LOGIN_FAIL : actionTypes.REGISTER_FAIL,
  });
};
export const clearMsgAuth = () => async (dispatch) => {
  dispatch({
    type: actionTypes.CLEAR_MSG_AUTH,
  });
};

export default setAuthTokens;

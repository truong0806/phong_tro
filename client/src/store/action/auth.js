import actionTypes from './actionTypes';
import { apiRegister, apiLogin, apiLogout } from '../../service/auth';

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
    dispatch({ type: actionTypes.LOGOUT });
  }
};

export const logout = (refreshTokens) => async (dispatch) => {
  console.log("🚀 ~ file: auth.js:49 ~ logout ~ refreshTokens:", refreshTokens)
  apiLogout(refreshTokens);
  dispatch({
    type: actionTypes.LOGOUT,
  });
};
export const refreshToken = (accessToken, refreshToken) => (dispatch) => {
  dispatch({
    type: actionTypes.REFRESH_TOKEN,
    payload: { accessToken, refreshToken },
  });
};

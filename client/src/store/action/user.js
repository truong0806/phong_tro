import actionTypes from './actionTypes';
import { apiUser } from '../../service/user';

export const getUser = () => async (dispatch) => {
  try {
    const response = await apiUser();
    console.log('🚀 ~ file: user.js:7 ~ getUser ~ response:', response);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_USER,
        userData: response.data.response,
      });
      localStorage.setItem('user', JSON.stringify(response.data.response));
    } else {
      dispatch({
        type: actionTypes.GET_USER_FAIL,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_USER,
      userData: null,
    });
  }
};

export const clearMsg = () => async (dispatch) => {
  dispatch({
    type: actionTypes.CLEAR_MSG,
  });
};

import actionTypes from './actionTypes';
import { apiUser } from '../../service/user';

export const getUser = () => async (dispatch) => {
  try {
    const response = await apiUser();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_USER,
        userData: response.data.response,
      });
      localStorage.setItem('user', JSON.stringify(response.data.response));
    } else {
      dispatch({
        type: actionTypes.GET_USER_FAIL,
        msg: 'Failed to get user',
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_USER_FAIL,
      msg: 'Failed to get user',
    });
  }
};

export const clearMsgUser = () => async (dispatch) => {
  dispatch({
    type: actionTypes.CLEAR_MSG,
  });
};

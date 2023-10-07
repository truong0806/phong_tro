import actionTypes from './actionTypes';
import { apiUser } from '../../service/user';
export const getUser = () => async (dispatch) => {
  try {
    const response = await apiUser();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_USER,
        userData: response.data.response,
        msg: response.data.msg,
      });
    } else {
      dispatch({
        type: actionTypes.GET_USER,
        msg: response.data.msg,
      });
      dispatch({ type: actionTypes.LOGOUT });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_USER,
      userData: null,
    });
    dispatch({ type: actionTypes.LOGOUT });
  }
};

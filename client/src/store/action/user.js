import actionTypes from './actionTypes';
import { apiUser } from '../../service/user';
export const getUser = () => async (dispatch) => {
  try {
    const response = await apiUser();
    // console.log(
    //   '🚀 ~ file: user.js:8 ~ getUser ~ response:',
    //   response.data.response
    // );
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_USER,
        userData: response.data.response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_USER,
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

import actionTypes from '../action/actionTypes';

const initState = {
  userData: {},
  msg: '',
  msg1: '',
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        userData: action.userData || {},
        msg: action.msg || '',
      };
    case actionTypes.GET_USER_FAIL:
      return {
        ...state,
        userData: {},
        msg1: action.msg,
      };
    case actionTypes.CLEAR_MSG:
      return {
        ...state,
        msg: '',
      };
    default:
      return state;
  }
};

export default userReducer;

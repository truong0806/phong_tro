import actionTypes from '../action/actionTypes';

const initState = {
  userData: {},
  msg: '',
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        userData: action.userData || {},
        msg: action.msg || '',
      };
    default:
      return state;
  }
};

export default userReducer;

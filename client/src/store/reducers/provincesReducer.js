import actionTypes from '../action/actionTypes';

const initState = {
  provinces1: [],
  districts: [],
  wards: [],
};
const provincesReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_LOCATION:
      return {
        ...state,
        provinces1: action.provinces1 || [],
        districts: action.districts || [],
        wards: action.wards || [],
      };
    default:
      return state;
  }
};

export default provincesReducer;

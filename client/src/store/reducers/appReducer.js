import actionTypes from '../action/actionTypes';

const initState = {
  categories: [],
  prices: [],
  msg: '',
  areas: [],
  provinces: [],
  count: 0,
};
const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories || [],
        msg: action.msg || '',
        count: 0,
      };
    case actionTypes.GET_PRICES:
      return {
        ...state,
        prices: action.prices || [],
        msg: action.msg || '',
      };
    case actionTypes.GET_AREAS:
      return {
        ...state,
        areas: action.areas || [],
        msg: action.msg || '',
      };
    case actionTypes.GET_PROVINCES:
      return {
        ...state,
        provinces: action.provinces || [],
        msg: action.msg || '',
      };
    case actionTypes.GET_PROVINCES1:
      return {
        ...state,
        provinces1: action.provinces1 || [],
        msg: action.msg || '',
      };

    default:
      return state;
  }
};

export default appReducer;

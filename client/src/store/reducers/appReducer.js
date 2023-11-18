import actionTypes from '../action/actionTypes';

const initState = {
  categories: [],
  recharge_list: {},
  prices: [],
  msg: '',
  areas: [],
  provinces: [],
  count: 0,
  msg_recharge: '',
};
const appReducer = (state = initState, action) => {
  console.log(
    '🚀 ~ file: appReducer.js:15 ~ appReducer ~ action.typ:',
    action.typ
  );
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
    case actionTypes.RECHARGE_DATA:
      return {
        ...state,
        rechargeData: action.rechargeData || [],
      };
    case actionTypes.GET_HISTORY_RECHARGE:
      return {
        ...state,
        recharge_list: action.data || [],
      };
    case actionTypes.GET_HISTORY_RECHARGE_FAIL:
      return {
        ...state,
        recharge_list: [],
        msg_recharge: action.msg || '',
      };
    default:
      return state;
  }
};

export default appReducer;

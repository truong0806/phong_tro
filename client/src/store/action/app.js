import actionTypes from './actionTypes';
import * as apis from '../../service';

export const getCategories = () => async (dispatch) => {
  try {
    const response = await apis.apiCategories();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_CATEGORIES,
        categories: response.data.response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_CATEGORIES,
        msg: response.data.msg,
        categories: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CATEGORIES,
      categories: null,
    });
  }
};
export const getPrices = () => async (dispatch) => {
  try {
    const response = await apis.apiPrices();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_PRICES,
        prices: response.data.response.sort((a, b) => +a.id - +b.id),
      });
    } else {
      dispatch({
        type: actionTypes.GET_PRICES,
        msg: response.data.msg,
        prices: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRICES,
      prices: null,
    });
  }
};
export const getAreas = () => async (dispatch) => {
  try {
    const response = await apis.apiAreas();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_AREAS,
        areas: response.data.response.sort((a, b) => +b.id - +a.id),
      });
    } else {
      dispatch({
        type: actionTypes.GET_AREAS,
        msg: response.data.msg,
        areas: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_AREAS,
      areas: null,
    });
  }
};
export const getProvince = () => async (dispatch) => {
  try {
    const response = await apis.apiProvince();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_PROVINCES,
        provinces: response.data.response.sort((a, b) => +b.id - +a.id),
      });
    } else {
      dispatch({
        type: actionTypes.GET_PROVINCES,
        msg: response.data.msg,
        provinces: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PROVINCES,
      provinces: null,
    });
  }
};
export const getHistoryRecharge = () => async (dispatch) => {
  try {
    const response = await apis.apiGetHistoryRecharge();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_HISTORY_RECHARGE,
        data: response.data.response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_HISTORY_RECHARGE_FAIL,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_HISTORY_RECHARGE_FAIL,
    });
  }
};

export const rechargeAddData = (rechargeData) => ({
  type: actionTypes.RECHARGE_DATA,
  rechargeData,
});

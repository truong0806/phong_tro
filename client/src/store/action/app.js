import actionTypes from './actionTypes';
import * as apis from '../../service';

export const getCategories = () => async (dispatch) => {
  try {
    const response = await apis.apiCategories();
    // console.log('app: ', response)
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
    // console.log('app: ',response)
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
    // console.log('app: ', response)
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
    // console.log('app: ', response)
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
export const getProvince1 = () => async (dispatch) => {
  try {
    const response = await apis.apiProvince1();
    
    if (response?.status === 200) {
      dispatch({
        type: actionTypes.GET_PROVINCES1,
        provinces1: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_PROVINCES1,
        msg: response.data.msg,
        provinces1: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PROVINCES1,
      provinces1: null,
    });
  }
};

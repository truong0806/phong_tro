import actionTypes from './actionTypes'
import * as apis from '../../service'
import { apiPrices } from './../../service/price'

export const getCategories = () => async (dispatch) => {
  try {
    const response = await apis.apiCategories()
    //console.log('app: ',response)
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_CATEGORIES,
        categories: response.data.response,
      })
    } else {
      dispatch({
        type: actionTypes.GET_CATEGORIES,
        msg: response.data.msg,
        categories: null,
      })
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CATEGORIES,
      categories: null,
    })
  }
}
export const getPrices = () => async (dispatch) => {
  try {
    const response = await apis.apiPrices()
    //console.log('app: ',response)
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_PRICES,
        prices: response.data.response.sort((a,b)=> +a.id - +b.id),
      })
    } else {
      dispatch({
        type: actionTypes.GET_PRICES,
        msg: response.data.msg,
        prices: null,
      })
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRICES,
      prices: null,
    })
  }
}

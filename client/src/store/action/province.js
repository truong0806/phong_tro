import actionTypes from './actionTypes';
import * as apis from '../../service';

export const getLocation = () => async (dispatch) => {
  try {
    const provinces1 = await apis.apiLocation();
    if (provinces1?.provinces.status === 200) {
      dispatch({
        type: actionTypes.GET_LOCATION,
        provinces1: provinces1.provinces.data,
        districts: provinces1.districts.data,
        wards: provinces1.wards.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_LOCATION,
        provinces1: null,
        districts: null,
        wards: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_LOCATION,
      provinces1: null,
      districts: null,
      wards: null,
    });
  }
};
// export const getDistricts = () => async (dispatch) => {
//   try {
//     const districts = await apis.apiDistricts();
//     if (districts?.status === 200) {
//       dispatch({
//         type: actionTypes.GET_DISTRICTS,
//         districts: districts.data,
//       });
//     } else {
//       dispatch({
//         type: actionTypes.GET_DISTRICTS,
//         districts: null,
//       });
//     }
//   } catch (error) {
//     dispatch({
//       type: actionTypes.GET_DISTRICTS,
//       districts: null,
//     });
//   }
// };
// export const getWards = () => async (dispatch) => {
//   try {
//     const wards = await apis.apiWards();
//     if (wards?.status === 200) {
//       dispatch({
//         type: actionTypes.GET_WARDS,
//         wards: wards.data,
//       });
//     } else {
//       dispatch({
//         type: actionTypes.GET_WARDS,
//         wards: null,
//       });
//     }
//   } catch (error) {
//     dispatch({
//       type: actionTypes.GET_WARDS,
//       wards: null,
//     });
//   }
// };

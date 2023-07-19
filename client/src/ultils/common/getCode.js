import { getNumbersArea, getNumbersPrice } from './getnumbers';

export const getMaxMinPrice = (totals) => {
  let arr = [];
  return totals?.map((item) => {
    let arrMaxMin = getNumbersPrice(item.value);
    if (arrMaxMin.length === 1) arr.push(arrMaxMin[0]);
    let sortedArr = arr.sort();
    return {
      ...item,
      min: sortedArr.indexOf(arrMaxMin[0]) === 0 ? 0 : arrMaxMin[0],
      max:
        sortedArr.indexOf(arrMaxMin[0]) === 0
          ? arrMaxMin[0]
          : sortedArr.indexOf(arrMaxMin[0]) === 1
          ? 9999999
          : arrMaxMin[1],
    };
  });
};
export const getMaxMinArea = (totals) => {
  let arr = [];
  return totals?.map((item) => {
    let arrMaxMin = getNumbersArea(item.value);
    if (arrMaxMin.length === 1) arr.push(arrMaxMin[0]);
    let sortedArr = arr.sort();
    return {
      ...item,
      min: sortedArr.indexOf(arrMaxMin[0]) === 0 ? 0 : arrMaxMin[0],
      max:
        sortedArr.indexOf(arrMaxMin[0]) === 0
          ? arrMaxMin[0]
          : sortedArr.indexOf(arrMaxMin[0]) === 1
          ? 9999999
          : arrMaxMin[1],
    };
  });
};
export const getCodesPrices = (arrMinMax, prices) => {
  const pricesWithMinMax = getMaxMinPrice(prices);
  return pricesWithMinMax?.filter(
    (item) =>
      (item.min >= arrMinMax[0] && item.min <= arrMinMax[1]) ||
      (item.max >= arrMinMax[0] && item.max <= arrMinMax[1])
  );
};
export const getCodesArea = (arrMinMax, areas) => {
  const areasWithMinMax = getMaxMinArea(areas);
  return areasWithMinMax.filter(
    (item) =>
      (item.min >= arrMinMax[0] && item.min <= arrMinMax[1]) ||
      (item.max >= arrMinMax[0] && item.max <= arrMinMax[1])
  );
};

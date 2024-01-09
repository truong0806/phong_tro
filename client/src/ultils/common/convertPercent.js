export const convertto100 = (percent, name) => {
  let target = name === 'prices' ? 15 : name === 'areas' ? 90 : 1;
  return Math.floor((percent / target) * 100);
};
export const convert100toTarget = (percent, name) => {
  return name === 'prices'
    ? (Math.ceil(Math.round(percent * 1.5) / 5) * 5) / 10
    : name === 'areas'
    ? Math.ceil(Math.round(percent * 0.9) / 5) * 5
    : 0;
};

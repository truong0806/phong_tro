import moment from 'moment'

export const checkStatus = (day) => {
  var today = moment()
  var specificDate = moment(day, 'DD/MM/YYYY')
  if (today.diff(specificDate, 'day') > 0) {
    return 'Tin hết hạn'
  } else {
    return 'Tin đang hiển thị'
  }
}
export const setStatus = (arr) => {
  arr?.map((item) => {
    return (item.overviews.status = `${checkStatus(
      item?.overviews?.expire?.split(' ')[3],
    )}`)
  })
  return arr
}

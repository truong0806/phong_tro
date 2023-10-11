import moment from 'moment';

export const checkStatus = (day) => {
  var today = moment();
  var specificDate = moment(day, 'DD/MM/YYYY');
  if (today.diff(specificDate, 'day') > 0) {
    return (
        'Hết hạn'
    );
  } else {
    return (
        'Đang hoạt động'
    );
  }
};

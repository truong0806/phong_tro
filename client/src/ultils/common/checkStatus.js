import moment from 'moment';

export const checkStatus = (day) => {
  var today = moment();
  var specificDate = moment(day, 'DD/MM/YYYY');
  if (today.diff(specificDate, 'day') > 0) {
    return (
      <span className="p-2 text-[#f67053] flex justify-center font-bold">
        Hết hạn
      </span>
    );
  } else {
    return (
      <span className="p-2 text-[#57b477] flex justify-center font-bold">
        Đang hoạt động
      </span>
    );
  }
};

const getDate = () => {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var day = String(date.getDate()).padStart(2, '0');
  var month = String(date.getMonth() + 1).padStart(2, '0');
  var year = date.getFullYear();
  return `${hour}:${minute} ${day}/${month}/${year}`;
};
export default getDate;

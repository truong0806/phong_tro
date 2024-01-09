const setStylePost = (bonus, setTextColor, type) => {
  if (bonus === 'Tin miễn phí' || bonus === 'Tin thường') {
    type === 'title'
      ? setTextColor('text-[#055699]')
      : setTextColor('border-[#055699]');
  }
  if (bonus === 'Tin VIP 3') {
    type === 'title'
      ? setTextColor('text-[#007BFF]')
      : setTextColor('border-[#007BFF]');
  }
  if (bonus === 'Tin VIP 2') {
    type === 'title'
      ? setTextColor('text-[#FF6600]')
      : setTextColor('border-[#FF6600]');
  }
  if (bonus === 'Tin VIP 1') {
    type === 'title'
      ? setTextColor('text-[#ea2e9d]')
      : setTextColor('border-[#ea2e9d]');
  }
  if (bonus === 'Tin VIP nổi bật') {
    type === 'title'
      ? setTextColor('text-[#E13427]')
      : setTextColor('border-[#E13427]');
  }
};
export default setStylePost;

const inputSelect = ({ text, array, maxW }) => {
  console.log('🚀 ~ file: inputSelect.js:2 ~ inputSelect ~ array:', array);
  return (
    <div className={maxW}>
      <label htmlFor="default" className="mb-10 font-bold ">
        {text}
      </label>
      <select
        id="default"
        className="bg-gray-50 border   my-2 py-2 border-gray-300 text-gray-900 mb-6 text-[1rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 "
      >
        <option defaultValue={null} selected>{`-- Chọn ${text} --`}</option>
        {array?.map((item) => (
          <option value="" key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
export default inputSelect;

const inputSelect = ({ text, array , maxW}) => {
  return (
    <div className={maxW}>
      <label for="default" className="mb-10 font-bold ">
        {text}
      </label>
      <select
        id="default"
        className="bg-gray-50 border  my-2 py-2 border-gray-300 text-gray-900 mb-6 text-[1rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 "
      >
        <option selected>{`-- Chọn ${text} --`}</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>

        {/* {array.map((item) => (
             <option value="DE">{item.name}</option>
        ))} */}
      </select>
    </div>
  );
};
export default inputSelect;

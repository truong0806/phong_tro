const inputSelect = ({ text, array, maxW, isLoading, setValue, value }) => {
  return (
    <div className={maxW}>
      <label htmlFor="default" className="mb-10 font-bold ">
        {text}
      </label>
      <select
        value={value}
        id="select-address"
        onChange={(e) => {
          const [name, code] = e.target.value.split(',');
          console.log("🚀 ~ file: inputSelect.js:12 ~ inputSelect ~ [name, code]:", [name, code])
          setValue({ name: name, code: code });
        }}
        className="bg-gray-50 border my-2 py-2 border-gray-300 text-gray-900 mb-6 text-[0.8rem] rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-1 "
      >
        <option value="">{`-- Chọn ${text} --`}</option>

        {array?.map((item, index) => (
          <option
            className="flex justify-center items-center"
            value={`${item?.value},${item?.code}`}
            key={index}
          >
            {item?.value ? item?.value : item?.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default inputSelect;

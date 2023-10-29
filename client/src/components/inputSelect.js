const inputSelect = ({
  text,
  array,
  maxW,
  isLoading,
  setValue,
  value,
  category,
  name,
  invalidFields,
  setInvalidFields,
}) => {
  return (
    <div className={` mb-4 ${maxW}`}>
      <label htmlFor="default" className="mb-10 font-bold ">
        {text}
      </label>
      <select
        defaultValue={''}
        id="select-address"
        onFocus={() =>
          setInvalidFields((prev) =>
            prev.filter((field) => field.name !== name)
          )
        }
        onChange={(e) => {
          const [value, code] = e.target.value.split(',');
          setValue({ value, code });
        }}
        className="bg-gray-50 border my-2 py-2 border-gray-300 text-gray-900 mb-2 text-[0.8rem] rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-1 "
      >
        <option value="" className="hidden">
          {category ? category : `-- Chọn ${text} --`}
        </option>
        {array?.map((item, index) => (
          <option
            className="flex justify-center items-center"
            value={`${item?.value},${item?.code}`}
            key={index}
          >
            {item?.value}
          </option>
        ))}
      </select>
      <small className="text-red-500">
        {invalidFields?.some((field) => field.name === name) &&
          `Vui lòng chọn
           ${text}`}
      </small>
    </div>
  );
};
export default inputSelect;

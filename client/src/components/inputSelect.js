import { MoonLoader } from 'react-spinners';
const inputSelect = ({ text, array, maxW, isLoading }) => {
  return (
    <div className={maxW}>
      <label htmlFor="default" className="mb-10 font-bold ">
        {text}
      </label>
      <select className="bg-gray-50 border   my-2 py-2 border-gray-300 text-gray-900 mb-6 text-[1rem] rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-1 ">
        {isLoading ? (
          <option defaultValue={null} selected>{`-- Chọn ${text} --`}</option>
        ) : (
          <option defaultValue={null} selected>{`...`}</option>
        )}
        {array?.map((item, index) => (
          <option
            className="flex justify-center items-center"
            value={item.value ? item.value : item.name}
            key={index}
          >
            {item.value ? item.value : item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default inputSelect;

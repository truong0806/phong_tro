import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Address2 = () => {
  const { dataEdit } = useSelector((state) => state.post);
  console.log('🚀 ~ file: Address2.js:6 ~ Address2 ~ dataEdit:', dataEdit);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState(
    dataEdit?.address.split(',')[4] || ''
  );
  const [selectedDistrict, setSelectedDistrict] = useState(
    dataEdit?.address.split(',')[3] || ''
  );
  const [selectedWard, setSelectedWard] = useState(
    dataEdit?.address.split(',')[2] || ''
  );
  useEffect(() => {
    // Gọi API để lấy danh sách tỉnh/thành phố
    fetch('https://provinces.open-api.vn/api/p/')
      .then((response) => response.json())
      .then((data) => setProvinces(data));
    if (dataEdit?.address) {
      const selectedProvinceCode = provinces.find(
        (province) =>
          province.name.trim() === dataEdit?.address.split(',')[4].trim()
      );
      setSelectedProvince(selectedProvinceCode);
      console.log(
        '🚀 ~ file: Address2.js:24 ~ useEffect ~ selectedProvinceCode:',
        selectedProvinceCode
      );
    }
  }, []);

  useEffect(() => {
    // Nếu đã chọn tỉnh/thành phố, gọi API để lấy danh sách quận/huyện
    if (selectedProvince) {
      fetch(`https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`)
        .then((response) => response.json())
        .then((data) => {
          console.log('🚀 ~ file: Address2.js:25 ~ useEffect ~ data:', data);
          return setDistricts(data.districts);
        });
    }
  }, [selectedProvince]);

  useEffect(() => {
    // Nếu đã chọn quận/huyện, gọi API để lấy danh sách xã/phường
    if (selectedDistrict) {
      fetch(`https://provinces.open-api.vn/api/d/${selectedDistrict}?depth=2`)
        .then((response) => response.json())
        .then((data) => setWards(data.wards));
    }
  }, [selectedDistrict]);

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
    // Reset danh sách quận/huyện và xã/phường khi chọn tỉnh/thành phố mới
    setDistricts([]);
    setWards([]);
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    // Reset danh sách xã/phường khi chọn quận/huyện mới
    setWards([]);
  };
  const handleWardChange = (event) => {
    setSelectedWard(event.target.value);
  };

  return (
    <div>
      <label>Tỉnh/Thành phố:</label>
      <select value={selectedProvince} onChange={handleProvinceChange}>
        <option value="">Chọn tỉnh/thành phố</option>
        {provinces?.map((province) => (
          <option key={province.code} value={province.code}>
            {province.name}
          </option>
        ))}
      </select>

      <label>Quận/Huyện:</label>
      <select value={selectedDistrict} onChange={handleDistrictChange}>
        <option value="">Chọn quận/huyện</option>
        {districts?.map((district) => (
          <option key={district.code} value={district.code}>
            {district.name}
          </option>
        ))}
      </select>

      <label>Xã/Phường:</label>
      <select value={selectedWard} onChange={handleWardChange}>
        <option value="">Chọn xã/phường</option>
        {wards?.map((ward) => (
          <option key={ward.code} value={ward.code}>
            {ward.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Address2;

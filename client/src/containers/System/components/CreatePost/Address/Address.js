import React, { useEffect, useState } from 'react';
import { InputText, SelectAddress, InputTextReadOnly } from '../..';
import {
  apiGetDistricts,
  apiGetWard,
  apiLocation,
} from '../../../../../service';
import SelectAddress2 from './SelectAddress2';
const Address = ({
  value,
  setValue,
  invalidFields,
  setInvalidFields,
  isEdit,
}) => {
  const [provinces, setProvinces] = useState([]);
  const [provinces1, setProvinces1] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [ward, setWard] = useState('');
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const foundProvince =
      value.province.length > 0 &&
      provinces?.find((item) => item.name === value?.province?.trim());
    setProvince(foundProvince ? foundProvince.code : '');
  }, [value, provinces]);

  useEffect(() => {
    const foundDistrict =
      value.district.length > 0 &&
      districts?.find((item) => item.name === value?.district?.trim());
    setDistrict(foundDistrict ? foundDistrict.code : '');
  }, [value, districts]);

  useEffect(() => {
    const foundWard =
      value.ward.length > 0 &&
      wards?.find((item) => item.name === value?.ward?.trim());
    setWard(foundWard ? foundWard.code : '');
  }, [value, wards]);

  useEffect(() => {
    const fetchPublicProvince = async () => {
      const response = await apiLocation();
      console.log(
        '🚀 ~ file: Address.js:49 ~ fetchPublicProvince ~ response:',
        response
      );
      if (response.status === 200) {
        setProvinces(response?.data);
      }
    };
    fetchPublicProvince();
  }, []);

  useEffect(() => {
    setDistrict(null);
    const fetchPublicDistrict = async () => {
      const response = await apiGetDistricts(province);
      if (response.status === 200) {
        setDistricts(response?.data?.districts);
      }
    };
    province && fetchPublicDistrict();
    !province ? setReset(true) : setReset(false);
    !province && setDistricts([]);
  }, [province]);

  useEffect(() => {
    setWard(null);
    const fetchPublicWard = async () => {
      const response = await apiGetWard(district);
      if (response.status === 200) {
        setWards(response?.data?.wards);
      }
    };
    district && fetchPublicWard();
    !district ? setReset(true) : setReset(false);
    !district && setWards([]);
  }, [district]);

  return (
    <div className="mt-3 gap-2 justify-between flex flex-col mb-[25px]">
      <div className="w-full sm:mb-[15px]">
        <h3 className="text-[1.75rem] font-bold sm:mb-[7px]">
          Địa chỉ cho thuê
        </h3>
      </div>
      <div className="flex flex-col">
        <InputText
          value={value.apartmentNumber}
          name={'apartmentNumber'}
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
          typeInput={'text'}
          label={'Số nhà'}
          setValue={setValue}
          styleInput={'max-w-[30%]'}
        />
        <InputText
          value={value.street}
          name={'street'}
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
          typeInput={'text'}
          label={'Đường'}
          setValue={setValue}
          styleInput={'max-w-[60%]'}
        />
      </div>
      <div className="flex flex-row gap-3">
        {/* <SelectAddress
          setInvalidFields={setInvalidFields}
          name={'province'}
          invalidFields={invalidFields}
          type="province"
          value={province}
          setValue={setValue}
          setLoca={setProvince}
          array={provinces}
          label="Tỉnh/Thành phố"
        /> */}
        <SelectAddress2
          setInvalidFields={setInvalidFields}
          name={'province'}
          invalidFields={invalidFields}
          type="province"
          value={province}
          setValue={setValue}
          array={provinces}
          setLoca={setProvince}
          label="Tỉnh/Thành phố"
        />
        <SelectAddress2
          setInvalidFields={setInvalidFields}
          name={'district'}
          invalidFields={invalidFields}
          reset={reset}
          type="district"
          value={district}
          array={districts}
          setValue={setValue}
          setLoca={setDistrict}
          label="Quận/Huyện"
        />
        <SelectAddress2
          setInvalidFields={setInvalidFields}
          name={'ward'}
          invalidFields={invalidFields}
          reset={reset}
          type="ward"
          value={ward}
          setValue={setValue}
          setLoca={setWard}
          array={wards}
          label="Phường/Xã"
        />
      </div>
      <InputTextReadOnly
        setValue={setValue}
        label="Địa chỉ chính xác"
        value={
          isEdit
            ? `${value.apartmentNumber}, ${value.street}, ${value.ward}, ${value.district}, ${value.province}`
            : `${
                value?.apartmentNumber?.length === 0
                  ? ''
                  : `${value?.apartmentNumber},`
              } ${value?.street?.length === 0 ? '' : `${value?.street},`} ${
                ward
                  ? `${wards?.find((item) => item.code === +ward)?.name},`
                  : ''
              } ${
                district
                  ? `${
                      districts?.find((item) => item.code === +district)?.name
                    },`
                  : ''
              } ${
                province
                  ? provinces?.find((item) => item.code === +province)?.name
                  : ''
              }`
        }
      />
    </div>
  );
};

export default Address;

import React, { useEffect, useState } from 'react';
import { InputText, SelectAddress, InputTextReadOnly } from '../..';
import {
  apiGetDistricts,
  apiGetWard,
  apiLocation,
} from '../../../../../service';
import SelectAddress2 from './SelectAddress2';
const Address = ({
  address,
  setValue,
  invalidFields,
  setInvalidFields,
  isEdit,
}) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [ward, setWard] = useState('');
  const [reset, setReset] = useState(false);

  console.log('🚀 ~ file: Address.js:20 ~ province:', province, reset);
  useEffect(() => {
    const fetchPublicProvince = async () => {
      const response = await apiLocation();
      if (response.status === 200) {
        setProvinces(response?.data);
      }
    };
    fetchPublicProvince();
  }, []);

  useEffect(() => {
    setValue((prev) => ({
      ...prev,
      district: '',
      ward: '',
    }));
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
    setValue((prev) => ({
      ...prev,
      ward: '',
    }));
    setWard(null);
    const fetchPublicWard = async () => {
      const response = await apiGetWard(district);
      console.log(
        '🚀 ~ file: Address.js:86 ~ fetchPublicWard ~ district:',
        district
      );
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
          value={address.apartmentNumber}
          name={'apartmentNumber'}
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
          typeInput={'text'}
          label={'Số nhà'}
          setValue={setValue}
          styleInput={'max-w-[30%]'}
        />
        <InputText
          value={address.street}
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
        <SelectAddress2
          isEdit={isEdit}
          setInvalidFields={setInvalidFields}
          name={'province'}
          invalidFields={invalidFields}
          value={address?.province?.trim() || province}
          setValue={setValue}
          setLoca={setProvince}
          array={provinces}
          label="Tỉnh/Thành phố"
          setReset={setReset}
          reset={reset}
        />
        <SelectAddress2
          isEdit={isEdit}
          setInvalidFields={setInvalidFields}
          name={'district'}
          invalidFields={invalidFields}
          reset={reset}
          value={address?.district?.trim() || district}
          setValue={setValue}
          setLoca={setDistrict}
          array={districts}
          label="Quận/Huyện"
          setReset={setReset}
        />
        <SelectAddress2
          isEdit={isEdit}
          setInvalidFields={setInvalidFields}
          name={'ward'}
          invalidFields={invalidFields}
          reset={reset}
          value={address?.ward?.trim() || ward}
          setValue={setValue}
          setLoca={setWard}
          array={wards}
          label="Phường/Xã"
          setReset={setReset}
        />
      </div>
      <InputTextReadOnly
        setValue={setValue}
        label="Địa chỉ chính xác"
        value={
          isEdit
            ? `${address.apartmentNumber}, ${address.street}, ${address.ward}, ${address.district}, ${address.province}`
            : `${
                address?.apartmentNumber?.length === 0
                  ? ''
                  : `${address?.apartmentNumber},`
              } ${address?.street?.length === 0 ? '' : `${address?.street},`} ${
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

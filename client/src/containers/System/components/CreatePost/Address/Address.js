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

  // useEffect(() => {
  //   if (address.province.length > 0) {
  //     const foundProvince = provinces?.find(
  //       (item) => item.name === address?.province?.trim()
  //     );
  //     setProvince(
  //       foundProvince
  //         ? { value: foundProvince.code, label: foundProvince.name }
  //         : ''
  //     );
  //   }
  // }, [provinces]);

  // useEffect(() => {
  //   if (address.district.length > 0) {
  //     const foundDistrict = districts?.find(
  //       (item) => item.name === address?.district?.trim()
  //     );
  //     setDistrict(
  //       foundDistrict
  //         ? { value: foundDistrict.code, label: foundDistrict.name }
  //         : ''
  //     );
  //   }
  // }, [districts]);

  // useEffect(() => {
  //   if (address.ward.length > 0) {
  //     const foundWard = wards?.find(
  //       (item) => item.name === address?.ward?.trim()
  //     );
  //     setWard(
  //       foundWard ? { value: foundWard.code, label: foundWard.name } : ''
  //     );
  //   }
  // }, [wards]);

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
          value={address?.province?.trim() || province}
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
          value={address?.district?.trim() || district}
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
          value={address?.ward?.trim() || ward}
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

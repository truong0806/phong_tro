import React, { useEffect, useState } from 'react';
import { InputText, SelectAddress, InputTextReadOnly } from '../..';
import {
  apiGetDistricts,
  apiGetWard,
  apiLocation,
} from '../../../../../service';
const Address = ({
  value,
  setValue,
  invalidFields,
  setInvalidFields,
  isEdit,
}) => {
  const [provinces, setProvinces] = useState([]);
  const [apartmentNumber, setApartmentNumber] = useState([]);
  const [street, setStreet] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [ward, setWard] = useState('');
  const [reset, setReset] = useState(false);

  useEffect(() => {
    // setApartmentNumber(isEdit ? value.split(',')[0].trimStart() : '');
    // setStreet(isEdit ? value.split(',')[1]?.trimStart() : '');

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
      if (response.status === 200) {
        setWards(response?.data?.wards);
      }
    };
    district && fetchPublicWard();
    !district ? setReset(true) : setReset(false);
    !district && setWards([]);
  }, [district]);

  useEffect(() => {
    setValue((prev) => ({
      ...prev,
      apartmentNumber: isEdit ? value.address.split(',')[0].trimStart() : '',
      street: isEdit ? value.address.split(',')[1].trimStart() : '',
      ward,
      district,
      address: isEdit
        ? value.address
        : `${apartmentNumber.length === 0 ? '' : `${apartmentNumber}, `}${
            street.length === 0 ? '' : `${street}, `
          }${
            ward ? `${wards?.find((item) => item.code === +ward)?.name}, ` : ''
          }${
            district
              ? `${districts?.find((item) => item.code === +district)?.name}, `
              : ''
          }${
            province
              ? provinces?.find((item) => item.code === +province)?.name
              : ''
          }`,
      province: province
        ? provinces?.find((item) => item.code === +province)?.name
        : '',
      label: district
        ? districts?.find((item) => item.code === +district)?.name
        : '',
    }));
  }, []);

  return (
    <div className="mt-3 gap-2 justify-between flex flex-col">
      <div className="w-full">
        <h3 className="text-[1.75rem] font-bold mb-[7px]">Địa chỉ cho thuê</h3>
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
        <SelectAddress
          setInvalidFields={setInvalidFields}
          name={'province'}
          invalidFields={invalidFields}
          type="province"
          value={province}
          setValue={setProvince}
          array={provinces}
          label="Tỉnh/Thành phố"
        />
        <SelectAddress
          setInvalidFields={setInvalidFields}
          name={'district'}
          invalidFields={invalidFields}
          reset={reset}
          type="district"
          value={district}
          editValue={district}
          array={districts}
          setValue={setDistrict}
          label="Quận/Huyện"
        />
        <SelectAddress
          setInvalidFields={setInvalidFields}
          name={'ward'}
          invalidFields={invalidFields}
          reset={reset}
          type="ward"
          value={ward}
          setValue={setWard}
          array={wards}
          label="Phường/Xã"
        />
      </div>
      <InputTextReadOnly
        setValue={setValue}
        label="Địa chỉ chính xác"
        value={
          isEdit
            ? value.address
            : `${
                value.apartmentNumber.length === 0
                  ? ''
                  : `${value.apartmentNumber},`
              } ${value.street.length === 0 ? '' : `${value.street},`} ${
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

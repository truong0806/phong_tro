export default function validate(payload, name, setInvalidFields) {
  let invalids = 0;
  const fields = Object.entries(payload);
  if (name === 'Create Post') {
    fields.forEach((item) => {
      if (item[1] === '' || item[1] === null) {
        setInvalidFields((prev) =>
          prev.filter((field) => field.name !== item[0])
        );
        setInvalidFields((prev) => [
          ...prev,
          {
            name: item[0],
            msg: `Vui lòng nhập `,
          },
        ]);
        invalids += 1;
      }
      if (item[1] === 0) {
        setInvalidFields((prev) =>
          prev.filter((field) => field.name !== item[0])
        );
        setInvalidFields((prev) => [
          ...prev,
          {
            name: item[0],
            msg: `Vui lòng nhập `,
          },
        ]);
        invalids += 1;
      }
      if (item[1]?.length === 0) {
        setInvalidFields((prev) =>
          prev.filter((field) => field.name !== item[0])
        );
        setInvalidFields((prev) => [
          ...prev,
          {
            name: item[0],
            msg: `Vui lòng nhập `,
          },
        ]);
        invalids += 1;
      }
    });
  } else {
    fields.forEach((item) => {
      switch (item[0]) {
        case 'password':
          if (item[1] === '') {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng nhập mật khẩu',
              },
            ]);
            invalids += 1;
          } else if (item[1].length < 6) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng nhập mật khẩu tối thiểu 6 ký tự',
              },
            ]);
            invalids += 1;
          }
          break;
        case 'otp':
          if (item[1] === '') {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng nhập mã xác thực',
              },
            ]);
            invalids += 1;
          } else if (item[1].length < 6 || item[1].length > 6) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng nhập mã xác thực 6 số',
              },
            ]);
            invalids += 1;
          } else if (!+item[1]) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng nhập mã xác thực 6 số',
              },
            ]);
            invalids += 1;
          }
          break;
        case 'comfirmPassword':
          if (item[1] === '' && name !== 'Đăng nhập') {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng nhập lại mật khẩu',
              },
            ]);
            invalids += 1;
          } else if (item[1] !== payload.password && name !== 'Đăng nhập') {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Mật khẩu không khớp',
              },
            ]);
            invalids += 1;
          }
          break;
        case 'phone':
          if (item[1] === '') {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng nhập số điện thoại',
              },
            ]);
            invalids += 1;
          } else if (!+item[1]) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng đúng định dạng số điện thoại',
              },
            ]);
            invalids += 1;
          } else if (item[1].length > 10 || item[1].length < 10) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng đúng số điện thoại với 10 số',
              },
            ]);
            invalids += 1;
          } else if (item[1].charAt(0) !== '0') {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Sai định dạng số điện thoại, vui lòng nhập lại',
              },
            ]);
            invalids += 1;
          }
          break;
        case 'newPhone':
          if (item[1] === '') {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng nhập số điện thoại mới',
              },
            ]);
            invalids += 1;
          } else if (!+item[1]) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng đúng định dạng số điện thoại',
              },
            ]);
            invalids += 1;
          } else if (item[1].length > 10 || item[1].length < 10) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng đúng số điện thoại với 10 số',
              },
            ]);
            invalids += 1;
          } else if (item[1].charAt(0) !== '0') {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Sai định dạng số điện thoại, vui lòng nhập lại',
              },
            ]);
            invalids += 1;
          }
          break;
        case 'name':
          if (item[1] === '' && name !== 'Đăng nhập') {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng nhập tên',
              },
            ]);
            invalids += 1;
          }
          break;

        default:
          break;
      }
    });
  }

  return invalids;
}

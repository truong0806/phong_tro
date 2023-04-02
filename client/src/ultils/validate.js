export const validate = (payload, setInvalidFields) => {
  let invalids = 0
  let fields = Object.entries(payload)
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
          ])
          invalids++
        } else {
          if (item[1].length < 6) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng nhập mật khẩu tối thiểu 6 ký tự',
              },
            ])
            invalids++
          }
        }
        break
      case 'comfirmPassword':
        if (item[1] === '') {
          setInvalidFields((prev) => [
            ...prev,
            {
              name: item[0],
              msg: 'Vui lòng nhập lại mật khẩu',
            },
          ])
          invalids++
        } else {
          if (item[1] !== payload.password) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Mật khẩu không khớp',
              },
            ])
            invalids++
          }
        }
        break
      case 'phone':
        if (item[1] === '') {
          setInvalidFields((prev) => [
            ...prev,
            {
              name: item[0],
              msg: 'Vui lòng nhập số điện thoại',
            },
          ])
          invalids++
        } else {
          if (!+item[1]) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng đúng định dạng số điện thoại',
              },
            ])
            invalids++
          } else {
            if (item[1].length > 10 || item[1].length < 10) {
              setInvalidFields((prev) => [
                ...prev,
                {
                  name: item[0],
                  msg: 'Vui lòng đúng số điện thoại với 10 số',
                },
              ])
              invalids++
            } else {
              if (item[1].charAt(0) !== '0') {
                setInvalidFields((prev) => [
                  ...prev,
                  {
                    name: item[0],
                    msg: 'Sai định dạng số điện thoại, vui lòng nhập lại',
                  },
                ])
                invalids++
              }
            }
          }
        }
        break
      case 'name':
        if (item[1] === '') {
          setInvalidFields((prev) => [
            ...prev,
            {
              name: item[0],
              msg: 'Vui lòng nhập tên',
            },
          ])
          invalids++
        }
        break
      default:
        break
    }
  })
  return invalids
}

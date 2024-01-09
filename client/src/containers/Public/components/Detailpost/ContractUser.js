import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import icons from '../../../../ultils/icons';
const { RiHeartLine, IoCall } = icons;

const ContractUser = ({ info }) => {
  return (
    <div>
      <div className="mb-[20px] p-4 bg-[#febb02] border-[#febb02] rounded-md">
        <figure className="w-[80px] h-[80px] mx-auto mb-[10px] ">
          <img
            src="https://phongtro123.com/images/default-user.png"
            alt="img"
            className="w-full h-full object-cover rounded-[50%]"
          ></img>
        </figure>
        <span className="block text-center font-bold text-[1.5rem]  w-full mb-[10px]">
          {info[0]?.users?.name}
        </span>
        <span className="block text-[1rem]  mb-[10px] text-center">
          <i className="bg-[#14c683] mr-[5px] w-[7px] h-[7px] rounded-[50%] inline-block mb-[2px]"></i>
          <span className="">Đang hoạt động</span>
        </span>
        <div className="gap-4 flex flex-col">
          <Button
            startIcon={<IoCall />}
            variant="contained"
            style={{
              width: '100%',
              backgroundColor: '#16c784',
              color: '#fff',
              fontWeight: '700',
              height: '35px',
              textTransform: 'none',
              padding: '0',
              fontSize: '1.2rem',
            }}
          >
            {`Gọi ${info[0]?.users?.phone}`}
          </Button>
          <Button
            onClick={() => {
              if (info[0]?.users?.phone) {
                const zaloLink = `https://zalo.me/${info[0]?.users?.phone}`;
                window.open(zaloLink, '_blank');
              } else {
                alert('Không tìm thấy số điện thoại zalo');
              }
            }}
            style={{
              width: '100%',
              backgroundColor: '#fff',
              color: '#333',
              border: '1px solid #333',
              fontWeight: '700',
              textTransform: 'none',
              height: '35px',
            }}
            variant="outlined"
            startIcon={
              <img
                src="https://phongtro123.com/images/icon-zalo.png"
                alt="zalo"
                className="w-[25px] h-[25px]"
              />
            }
          >
            Nhắn zalo
          </Button>
          <Button
            style={{
              width: '100%',
              backgroundColor: '#fff',
              color: '#333',
              border: '1px solid #333',
              textTransform: 'none',
              fontWeight: '700',
              height: '35px',
            }}
            variant="outlined"
            startIcon={<RiHeartLine />}
          >
            <span>Yêu thích</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContractUser;

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useWindowScroll } from 'react-use';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import throttle from 'lodash/throttle';
import icons from '../../../../ultils/icons';
const { RiHeartLine, IoCall } = icons;

const PostFixBar = () => {
  const { posts_detail } = useSelector((state) => state.post);
  const { y: pageYOffset } = useWindowScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (pageYOffset > 40) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, 200);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pageYOffset]);

  return (
    <>
      <div
        className={`${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }  w-full z-30 fixed top-[40px] bg-white h-[55px] left-0`}
      >
        <div className="w-[1100px] mx-auto p-[7px] flex flex-row items-center justify-between">
          <div className="text-[1.4rem] flex flex-col">
            <span>
              <span className=" font-bold text-[#16c784]">
                {posts_detail[0]?.attributes.price}
              </span>
              <span> - </span>
              <span className="font-normal">
                {posts_detail[0]?.attributes.acreage.slice(0, -1)}
                <sup className="font-normal">2</sup>
              </span>
            </span>
            <span className="text-[0.9rem] text-[#333]">
              {posts_detail[0]?.address}
            </span>
          </div>
          <div>
            <Stack spacing={1} direction="row">
              <Button
                style={{
                  backgroundColor: '#fff',
                  color: '#333',
                  border: '1px solid #ddd',
                  textTransform: 'none',
                  fontWeight: '700',
                }}
                variant="outlined"
                startIcon={<RiHeartLine />}
              >
                <span>Yêu thích</span>
              </Button>
              <Button
                onClick={() => {
                  if (posts_detail[0]?.users?.phone) {
                    const zaloLink = `https://zalo.me/${posts_detail[0]?.users?.phone}`;
                    window.open(zaloLink, '_blank');
                  } else {
                    alert('Không tìm thấy số điện thoại zalo');
                  }
                }}
                style={{
                  backgroundColor: '#fff',
                  color: '#333',
                  border: '1px solid #ddd',
                  fontWeight: '700',
                  textTransform: 'none',
                }}
                variant="outlined"
              >
                Nhắn zalo
              </Button>
              <Button
                startIcon={<IoCall />}
                variant="contained"
                style={{
                  backgroundColor: '#16c784',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  textTransform: 'none',
                }}
              >
                {`Gọi ${posts_detail[0]?.users?.phone}`}
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostFixBar;

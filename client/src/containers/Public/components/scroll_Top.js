import React, { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';
import throttle from 'lodash/throttle';

function ScrollTop({ position }) {
  const { y: pageYOffset } = useWindowScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (pageYOffset > 20) {
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

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } ${
        position ? position : 'bottom-[50px]'
      } fixed z-50  cursor-pointer right-[25px] w-[60px] h-[60px] flex items-center justify-center rounded-full bg-red-500 shadow-md hover:bg-red-600 transition duration-300`}
    >
      <img
        src="https://phongtro123.com/images/up-top-white.svg"
        alt="Up arrow"
        className="w-6 h-6"
      />
    </div>
  );
}

export default ScrollTop;

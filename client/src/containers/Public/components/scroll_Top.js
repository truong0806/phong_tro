import React, { useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use'
import throttle from 'lodash/throttle'

const ScrollTop = () => {
  const { y: pageYOffset } = useWindowScroll()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (pageYOffset > 20) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }, 200)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pageYOffset])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      onClick={handleClick}
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } fixed z-50 bottom-14 cursor-pointer right-6 w-14 h-14 flex items-center justify-center rounded-full bg-red-500 shadow-md hover:bg-red-600 transition duration-300`}
    >
      <img
        src="https://phongtro123.com/images/up-top-white.svg"
        alt="Up arrow"
        className="w-6 h-6"
      ></img>
    </div>
  )
}

export default ScrollTop

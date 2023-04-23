import React, { useState, useEffect } from 'react'
import { Loading } from '../../../components'

const RentalApartment = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      {loading ? (
        <div className="overlay">
          <Loading loading={loading} />
        </div>
      ) : (
        <div className={!loading ? 'opacity-100' : 'opacity-25'}>
          rentalApartment
        </div>
      )}
    </>
  )
}

export default RentalApartment

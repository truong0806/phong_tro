/* eslint-disable no-unused-vars */
import { Router, Route, Routes } from 'react-router-dom'
import {
  Home,
  Auth,
  RentalHouse,
  RentalRoom,
  RentalSpace,
  RentalApartment,
  HomePage,
} from './containers/Public'
import { path } from './ultils/constains'

function App() {
  return (
    <div className="h-full w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.AUTH} element={<Auth />} />
          <Route path="*" element={<HomePage />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoom />} />
          <Route path={path.NHA_CHO_THUE} element={<RentalHouse />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

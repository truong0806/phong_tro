import { Route, Routes } from 'react-router-dom';
import {
  Home,
  Auth,
  HomePage,
  Register,
  Login,
  DetailPost,
  Retal,
} from './containers/Public';
import { path } from './ultils/constains';

function App() {
  return (
    <div className="h-full lg:w-full justify-center items-center bg-primary bg-auto text-base">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path="*" element={<HomePage />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<Retal />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<Retal />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<Retal />} />
          <Route path={path.NHA_CHO_THUE} element={<Retal />} />
          <Route
            path={path.DETAIL_POST_TITLE__POSTID}
            element={<DetailPost />}
          />
          <Route path={'chi-tiet/*'} element={<DetailPost />} />
        </Route>
        <Route path={path.AUTH} element={<Auth />}>
          <Route path={path.REGISTER} element={<Register />} />
          <Route path={path.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

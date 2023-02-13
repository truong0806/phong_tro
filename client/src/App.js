import { Router, Route, Routes } from "react-router-dom";
import { Header, Home, Login, Register } from "./containers/Public";
import { path } from "./ultils/constains";
function App() {
  return (
    <div className="h-full w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.REGISTER} element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

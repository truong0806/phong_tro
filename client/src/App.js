import { Router, Route, Routes } from "react-router-dom";
import { Header, Home, Login } from "./containers/Public";
import { path } from "./ultils/constains";
function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.LOGIN} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

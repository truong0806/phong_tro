import { Router, Route, Routes } from "react-router-dom";
import { Header, Home, Auth, Register } from "./containers/Public";
import { path } from "./ultils/constains";
function App() {
  return (
    <div className="h-full w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.AUTH} element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

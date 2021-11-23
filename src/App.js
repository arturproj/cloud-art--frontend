import { Routes, Route } from "react-router-dom";
import LayoutAuthentication from "./layout/LayoutAuthentication";

import RegisterComponent from "./features/Account/Register";
import LoginComponent from "./features/Account/Login";

function NoMarchComponent() {
  return <h1>NoMarchComponent</h1>;
}
function App() {
  return (
    <Routes>
      <Route path="/register" element={<LayoutAuthentication />}>
        <Route index element={<RegisterComponent />} />
      </Route>
      <Route path="/login" element={<LayoutAuthentication />}>
        <Route index element={<LoginComponent />} />
      </Route>
      <Route path="*" element={<NoMarchComponent />} />
    </Routes>
  );
}

export default App;

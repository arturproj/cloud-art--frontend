import { Component } from "react";
import { Routes, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LayoutAuthentication from "./layout/LayoutAuthentication";
import RegisterComponent from "./features/Account/Register";
import LoginComponent from "./features/Account/Login";

function NoMarchComponent() {
  return <h1>NoMarchComponent</h1>;
}
class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/">
          {/* dafault login path */}
          <Route index element={<NoMarchComponent />} />
          <Route path="login" element={<LayoutAuthentication />}>
            <Route index element={<LoginComponent />} />
          </Route>
          <Route path="register" element={<LayoutAuthentication />}>
            <Route index element={<RegisterComponent />} />
          </Route>
        </Route>

        {/* <Route path="dashboard" element={<LayoutAuthentication />}>
        <Route index element={<LoginComponent />} />
      </Route> */}

        <Route path="*" element={<NoMarchComponent />} />
      </Routes>
    );
  }
}

export default connect()(App);

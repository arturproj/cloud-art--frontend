import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./share/configureStore";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";

import LayoutAuthentication from "./layout/LayoutAuthentification";
import RegisterComponent from "./feature/Authentication/AuthRegister";
import LoginComponent from "./feature/Authentication/AuthLogin";

import LayoutDashboard from "./layout/LayoutDashboard";
import DashViewCollections from "./feature/Dashboard/DashViewCollections";
import DashUploader from "./feature/Dashboard/DashUploader";

import {} from "./share/api/cloud_art_api";

function NoMarchComponent() {
  return <h1>NoMarchComponent</h1>;
}

export const PrivateRoute = (props) => {
  console.log("PrivateRoute", props);
  let { isAuthenticated } = props; // determine if authorized, from context or however you're doing it

  const location = useLocation();
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  if (!isAuthenticated) {
    return <Navigate to={`/login#${location.pathname}`} />;
  }
  return <Outlet />;
};

class App extends React.Component {
  componentDidMount() {
    this.props.toogleLonding();

    console.log("App", this.props, this.state);
    // this.props.loadCollection([
    //   {
    //     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    //     title: "Breakfast",
    //     author: "@bkristastucchio",
    //     rows: 2,
    //     cols: 2,
    //     featured: true,
    //   },
    //   {
    //     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    //     title: "Burger",
    //     author: "@rollelflex_graphy726",
    //   },
    //   {
    //     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    //     title: "Camera",
    //     author: "@helloimnik",
    //   },
    //   {
    //     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    //     title: "Coffee",
    //     author: "@nolanissac",
    //     cols: 2,
    //   },
    //   {
    //     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    //     title: "Hats",
    //     author: "@hjrc33",
    //     cols: 2,
    //   },
    //   {
    //     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    //     title: "Honey",
    //     author: "@arwinneil",
    //     rows: 2,
    //     cols: 2,
    //     featured: true,
    //   },
    //   {
    //     img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    //     title: "Basketball",
    //     author: "@tjdragotta",
    //   },
    //   {
    //     img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    //     title: "Fern",
    //     author: "@katie_wasserman",
    //   },
    //   {
    //     img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    //     title: "Mushrooms",
    //     author: "@silverdalex",
    //     rows: 2,
    //     cols: 2,
    //   },
    //   {
    //     img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    //     title: "Tomato basil",
    //     author: "@shelleypauls",
    //   },
    //   {
    //     img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    //     title: "Sea star",
    //     author: "@peterlaster",
    //   },
    //   {
    //     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    //     title: "Bike",
    //     author: "@southside_customs",
    //     cols: 2,
    //   },
    // ]);
    this.props.toogleLonding();
  }
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<LayoutDashboard />}>
          <Route exact path="/" element={<DashViewCollections />} />
        </Route>

        <Route exact path="login" element={<LayoutAuthentication />}>
          <Route exact index element={<LoginComponent />} />
        </Route>

        <Route exact path="register" element={<LayoutAuthentication />}>
          <Route exact index element={<RegisterComponent />} />
        </Route>

        <Route exact path="protected" element={<LayoutDashboard />}>
          <Route index element={<NoMarchComponent />} />
          <Route
            path="upload"
            element={
              <PrivateRoute {...this.props}>
                <DashUploader />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path="*" element={<NoMarchComponent />} />
      </Routes>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

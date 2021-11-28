import * as React from "react";
import { connect } from "react-redux";
import { authStateToProps, authDispatchToProps } from "../reducer";

import LoginComponent from "./component";

function Login(props) {
  console.log(props);
  const [onLoad, setLoad] = React.useState(false);
  // const location = useLocation();
  // const navigate = useNavigate();

  // console.log("Login", props, onLoad, location);
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoad(true);

    const data = props.serializeForm(event.currentTarget);

    localStorage.setItem("conditions", Boolean(data.get("conditions")));
  };

  return <LoginComponent onLoad={onLoad} handleSubmit={handleSubmit} />;
}

export default connect(authStateToProps, authDispatchToProps)(Login);

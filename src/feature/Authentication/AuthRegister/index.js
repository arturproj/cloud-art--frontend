import * as React from "react";
import { connect } from "react-redux";
import { authStateToProps, authDispatchToProps } from "../reducer";

import RegisterComponent from "./component";

function Register(props) {
  console.log(props);
  const [onLoad, setLoad] = React.useState(false);
  // const location = useLocation();
  // const navigate = useNavigate();

  // consoloe.log("Register", props, onLoad, location);
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoad(true);

    const data = props.serializeForm(event.currentTarget);

    localStorage.setItem("conditions", Boolean(data.get("conditions")));
  };

  return <RegisterComponent onLoad={onLoad} handleSubmit={handleSubmit} />;
}

export default connect(authStateToProps, authDispatchToProps)(Register);

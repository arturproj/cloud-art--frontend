import * as React from "react";
import { connect } from "react-redux";
import { authStateToProps, authDispatchToProps } from "../reducer";
import LoginComponent from "./component";

function Login(props) {
  return <LoginComponent />;
}

export default connect(authStateToProps, authDispatchToProps)(Login);

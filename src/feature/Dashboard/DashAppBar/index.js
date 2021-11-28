import { connect } from "react-redux";
import {
  authStateToProps,
  authDispatchToProps,
} from "../../Authentication/reducer";

import AppBarComponent from "./component";

function DashAppBar(props) {
  console.log("DashAppBar", props);
  return (
    <AppBarComponent
      isAuthenticated={props.isAuthenticated}
      user={props.user}
      label={props.label}
    />
  );
}

export default connect(authStateToProps, authDispatchToProps)(DashAppBar);

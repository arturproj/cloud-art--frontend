import * as React from "react";
import { connect } from "react-redux";
import { dashStateToProps, dashDispatchToProps } from "../reducer";

import UploadingComponent from "./component";

export function Uploading(props) {
  console.log("Uploading", props);

  return <UploadingComponent {...props} />;
}

export default connect(dashStateToProps, dashDispatchToProps)(Uploading);

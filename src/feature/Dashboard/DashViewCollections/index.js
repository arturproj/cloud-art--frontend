import * as React from "react";
import { connect } from "react-redux";
import { dashStateToProps, dashDispatchToProps } from "../reducer";

import ViewCollectionComponent from "./component";

class ViewCollection extends React.Component {
  componentDidMount() {
    console.log("view collection index", this.props);
  }
  render() {
    return <ViewCollectionComponent {...this.props} />;
  }
}

export default connect(dashStateToProps, dashDispatchToProps)(ViewCollection);

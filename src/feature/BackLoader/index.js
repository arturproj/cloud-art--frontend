import * as React from "react";
import { connect } from "react-redux";
import { loadingStateToProps, loadingDispatchToProps } from "./reducer";

import BackdropComponent from "./component";

class BackLoader extends React.Component {
  componentDidMount() {
    console.log("view collection index", this.props);
  }
  render() {
    return <BackdropComponent {...this.props} />;
  }
}

export default connect(loadingStateToProps, loadingDispatchToProps)(BackLoader);

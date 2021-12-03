import * as React from "react";
import { Navigate } from "react-router-dom";
import { clearStorage } from "../../../share/api/helpers";

function LogoutComponent() {
  clearStorage();

  return <Navigate to={`/`} />;
}

export default LogoutComponent;

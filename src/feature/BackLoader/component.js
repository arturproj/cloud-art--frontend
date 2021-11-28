import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function BackdropComponent(props) {
  console.log("Backdrop component", props);
  const handleClose = () => {
    props.toogleLonding();
    console.log(props);
  };

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.onLoading}
      // onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default BackdropComponent;

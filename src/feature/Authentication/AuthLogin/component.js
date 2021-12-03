import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import FormBox from "../components/FormBox";
import PropTypes from "prop-types";

import { authUser } from "../../../share/api/cloud_art_api";

export function LoginComponent(props) {
  console.log("LoginComponent", props);
  const [onLoad, setLoad] = React.useState(false);

  const handleSubmit = async (data) => {
    data.checkbox = data.checkbox === "on" ? true : false;
    let res = await authUser(data);

    if (res.success) {
      window.location = "/";
    }
  };

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <FormBox
        label="Sing In"
        conditions="Remember me"
        autoComplete
        handleSubmit={handleSubmit}
        onLoad={onLoad}
      />
    </Box>
  );
}

export default LoginComponent;

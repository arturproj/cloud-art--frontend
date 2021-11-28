import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import FormBox from "../components/FormBox";
import PropTypes from "prop-types";

export function RegisterComponent(props) {
  console.log("RegisterComponent", props);
  const { onLoad, handleSubmit } = props;
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
        Sign Up
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <FormBox
          label="Sing Up"
          conditions="I accept the Terms & Conditions"
          checkBoxRequired
          onLoad={onLoad}
        />
        <Grid container>
          <Grid item xs>
            <Link href="/login" variant="body2">
              {" Already have an account? Sign In"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

RegisterComponent.propTypes = {
  onLoad: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default RegisterComponent;

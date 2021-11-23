import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Copyright from "../Copyright";
import FormBox from "./components/FormBox";

import { authUser } from "../../share/api/cloud_art";

export default function RegisterComponent(props) {

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget); 

    authUser({
      email: data.get("email"),
      password: data.get("password"),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally((res) => console.log(res));

    console.log({
      conditions: data.get("conditions") ? true : false,
    });
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
        Sign Up
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <FormBox label="Sing Up" conditions="I accept the Terms & Conditions" />
        <Grid container>
          <Grid item xs>
            <Link href="/login" variant="body2">
              {" Already have an account? Sign In"}
            </Link>
          </Grid>
        </Grid>
        <Copyright
          name="Your Website"
          url="https://www.google.com"
          style={{ sx: { mt: 5 } }}
        />
      </Box>
    </Box>
  );
}

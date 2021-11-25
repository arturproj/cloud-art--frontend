import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Copyright from "../Copyright";
import FormBox from "./components/FormBox";
import { useHistory} from "react-router-dom";
import { addUser } from "../../share/api/cloud_art";

const validateRegistration = (response) => {
  console.log(response);
};

export default function RegisterComponent() {
  const [onLoad, setLoad] = React.useState(false);
  // const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoad(true);

    const data = new FormData(event.currentTarget);

    addUser({
      email: data.get("email"),
      password: data.get("password"),
    })
      .then(validateRegistration)
      .catch((err) => console.log(err))
      .finally((res) => console.log(res));

      // history.push("/login");
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
        <Copyright
          name="Your Website"
          url="https://www.google.com"
          style={{ sx: { mt: 5 } }}
        />
      </Box>
    </Box>
  );
}

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Copyright from "../Copyright";
import FormBox from "./components/FormBox";
import { connect } from "react-redux";
import { loginStateToProps, loginDispatchToProps } from "./reducer";
import { authUser } from "../../share/api/cloud_art";

const validateLogin = (response) => {
  console.log(response);
};
export function LoginComponent(props) {
  console.log(props);
  const [onLoad, setLoad] = React.useState(false);
  // const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoad(true);

    const data = new FormData(event.currentTarget);

    localStorage.setItem("remember", Boolean(data.get("conditions")));

    authUser({
      email: data.get("email"),
      password: data.get("password"),
    })
      .then((res) => {
        props.login(res);
        console.log(props);
        setLoad(false);
      })
      .catch((err) => console.log(err));
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
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <FormBox
          label="Sing In"
          conditions="Remember me"
          autoComplete
          onLoad={onLoad}
        />
        <Grid container>
          <Grid item xs>
            <Link href="/register" variant="body2">
              {"Don't have an account? Sign Up"}
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

export default connect(loginStateToProps, loginDispatchToProps)(LoginComponent);

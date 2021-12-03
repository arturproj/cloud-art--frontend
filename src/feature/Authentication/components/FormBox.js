import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function FormData(props) {
  console.log(props);
  const {
    label,
    conditions,
    autoComplete,
    checkBoxRequired,
    onLoad,
    handleSubmit,
  } = props;
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checkbox, setCheckbox] = React.useState("off");

  const sendData = (event) => {
    event.preventDefault();
    handleSubmit({ email, password, checkbox });
  };

  return (
    <React.Fragment>
      <Box component="form" onSubmit={sendData} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
          autoComplete={autoComplete.toString()}
          disabled={onLoad}
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          value={password}
          onInput={(e) => setPassword(e.target.value)}
          autoComplete={autoComplete.toString()}
          disabled={onLoad}
        />
        <FormControlLabel
          control={
            <Checkbox
              name="conditions"
              color="primary"
              value={checkbox}
              onChange={(e) => setCheckbox(e.target.checked)}
              required={checkBoxRequired}
              disabled={onLoad}
            />
          }
          label={conditions}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={onLoad}
        >
          {label}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

FormData.propTypes = {
  conditions: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  autoComplete: PropTypes.bool,
  checkBoxRequired: PropTypes.bool,
};

FormData.defaultProps = {
  conditions: "",
  label: "",
  autoComplete: false,
  checkBoxRequired: false,
};

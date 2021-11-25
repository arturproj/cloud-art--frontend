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
  const { label, conditions, autoComplete, checkBoxRequired, onLoad } = props;

  return (
    <React.Fragment>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete={autoComplete ? "email" : "off"}
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
        autoComplete={autoComplete ? "current-password" : "off"}
        disabled={onLoad}
      />
      <FormControlLabel
        control={
          <Checkbox
            name="conditions"
            color="primary"
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

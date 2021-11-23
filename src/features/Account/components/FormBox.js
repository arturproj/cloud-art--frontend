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

export default function FormData(props) {
  return (
    <React.Fragment>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="off"
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
        autoComplete="off"
        autoComplete="off"
      />
      <FormControlLabel
        control={<Checkbox name="conditions" color="primary" required />}
        label={props.conditions}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {props.label}
      </Button>
    </React.Fragment>
  );
}

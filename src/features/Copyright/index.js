import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props.style}
    >
      {"Copyright © "}
      <Link color="inherit" href={props.url}>
        {props.name}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}



export default Copyright;

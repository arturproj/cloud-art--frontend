import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})((prop) => ({
  // zIndex: prop.theme.zIndex.drawer + 1,
  transition: prop.theme.transitions.create(["width", "margin"], {
    easing: prop.theme.transitions.easing.sharp,
    duration: prop.theme.transitions.duration.leavingScreen,
  }),
  ...(prop.open && {
    // marginLeft: drawerwidth,
    // width: `calc(100% - ${prop.drawerwidth}px)`,
    transition: prop.theme.transitions.create(["width", "margin"], {
      easing: prop.theme.transitions.easing.sharp,
      duration: prop.theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function AppBarComponent(props) {
  const { label, isAuthenticated, user } = props;
  const navigate = useNavigate();
  console.log("AppBarComponent", props);

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
          onClick={() => navigate("/")}
        >
          {label}
        </Typography>

        <>
          {" "}
          {isAuthenticated ? (
            <>
              <Button
                color="inherit"
                variant="body"
                onClick={() => navigate("/protected")}
                underline="none"
                sx={{ mx: 1 }}
              >
                {"account".toUpperCase()}
              </Button>
              <Button
                color="inherit"
                variant="body"
                onClick={() => navigate("/logout ")}
                underline="none"
                sx={{ mx: 1 }}
              >
                {"logout".toUpperCase()}
              </Button>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                variant="body"
                onClick={() => navigate("/login")}
                underline="none"
                sx={{ mx: 1 }}
              >
                {"login".toUpperCase()}
              </Button>
              <Button
                color="inherit"
                variant="body"
                onClick={() => navigate("/register")}
                underline="none"
                sx={{ mx: 1 }}
              >
                {"register".toUpperCase()}
              </Button>
            </>
          )}
        </>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComponent;

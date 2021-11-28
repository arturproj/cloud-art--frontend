import * as React from "react";
import { useOutlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import DashAppBar from "../feature/Dashboard/DashAppBar";
import BackLoader from "../feature/BackLoader";
import { Container } from "@mui/material";

const Context = React.createContext({});

function LayoutDashboard(props) {
  console.log("Layout Dashboard", props);
  const outlet = useOutlet();

  return (
    <React.Fragment>
      <BackLoader />
      <DashAppBar label="Dashboard" />
      <CssBaseline />
      <Box sx={{ display: "flex", pt: 5 }}>
        <Box
          component="main"
          sx={{
            pt: 5,
            flexGrow: 1,
            height: "calc( 100vh - 40px )",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
          }}
        >
          <Container>
            <Context.Provider value={{ ...props }}>{outlet}</Context.Provider>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default LayoutDashboard;

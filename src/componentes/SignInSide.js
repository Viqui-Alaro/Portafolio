import * as React from "react";

import Proyectos from "./Proyectos";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import ButtonAppBar from "./ButtonAppBar";
import TablasPrueba from "./TablasPrueba";
import theme from "../theme";

export default function SignInSide() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container component="main" sx={{ height: "100vh" }}>
        {/* Panel izquierdo: identidad, estudios y skills */}
        <Grid
          item
          xs={12}
          sm={8}
          md={4}
          component={Paper}
          elevation={6}
          square
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <ButtonAppBar />
          <Box sx={{ overflowY: "auto", flex: 1 }}>
            <TablasPrueba />
          </Box>
        </Grid>

        {/* Panel derecho: proyectos */}
        <Grid
          item
          xs={12}
          sm={4}
          md={8}
          sx={{
            background:
              "linear-gradient(160deg, #0F1229 0%, #171B3A 45%, #232a5c 100%)",
          }}
        >
          <Box sx={{ maxHeight: "100vh", overflow: "auto" }}>
            <Proyectos />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

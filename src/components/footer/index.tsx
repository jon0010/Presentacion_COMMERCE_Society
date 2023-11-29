import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Hecho con 💖 "}
      <Link color="inherit" href="https://jonnahuelpereyra.com.ar">
        jonnahuelpereyra.com.ar
      </Link>{" "}
      &nbsp;
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export const Footer = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 1,
          px: "auto",
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          maxWidth: "100%",
          alignItems: "center",
        }}
        className="container-fluid"
      >
        <Container maxWidth="md">
          <div className="row">
            <div className="col-md-6 col-sm-9">
              <Typography variant="body1" className="mb-2">
                Seguime en redes, ampliemos nuestra red
              </Typography>
              <Copyright />
            </div>
            <div className="col-md-6 col-sm-3 d-flex justify-content-start align-items-center">
              <div
                style={{
                  borderRight: "1px solid #000",
                  paddingRight: "10px",
                }}
                className="me-2"
              ></div>
              <div className="ms-2">
                <Link
                  href="https://www.linkedin.com/in/jon-nahuel-pereyra-832191257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-2"
                >
                  <LinkedInIcon />
                </Link>
                <Link
                  href="https://github.com/jon0010"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

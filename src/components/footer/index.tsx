import * as React from "react";
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 2,
            px: 2,
            mt: "auto",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            position: "sticky",
            bottom: 0,
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1" className="mb-2">
              Seguime en redes, ampliemos nuestra red
              <div style={{ marginTop: "10px" }}>
                <Link
                  href="https://www.linkedin.com/in/jon-nahuel-pereyra-832191257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: "10px" }}
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
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

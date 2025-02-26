import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function accountSettings() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Account Settings
          </Typography>
          <Button
            name="password"
            fullWidth
            variant="contained"
            href="changePass"
            sx={{ mt: 3, mb: 2 }}
          >
            Change Password
          </Button>
          <Button
            name="email"
            fullWidth
            variant="contained"
            href="changeEmail"
            sx={{ mt: 3, mb: 2 }}
          >
            Change Email
          </Button>
          <Button
            name="likedGames"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Change Liked Games
          </Button>
          <Button
            name="likedTech"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Change Liked Tech
          </Button>
          <Button
            name="return"
            fullWidth
            variant="contained"
            href="gameNews"
            sx={{ mt: 3, mb: 2 }}
          >
            Return
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

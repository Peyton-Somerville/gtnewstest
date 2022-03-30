import Head from "next/head";
import styles from "../styles/Home.module.css";
import * as React from "react";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useContext} from 'react'
import AuthContext from '../stores/authContext'
const theme = createTheme();

export default function Home() {
  const {user, login, logout}=useContext(AuthContext)
  return (
    <div className={styles.container}>
      <Head>
        <title>GT News</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/GTNEWS.png" />
      </Head>
      <main className={styles.main}>
        <ThemeProvider theme={theme}>
          <Container component="main">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <Typography component="h1" variant="h5">
                Welcome to GTNews!
              </Typography>
              <Typography textAlign="center">
                The go-to hub for news about your favorite games and tech
                companies! Create an account to begin personalizing your news.
              </Typography>
              {!user &&
              <Container maxWidth="xs">
                <Button
                  name="LogIn"
                  fullWidth
                  variant="contained"
                  href="signIn"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Log In
                </Button>
                <Button
                  name="createAccount"
                  fullWidth
                  variant="contained"
                  href="signUp"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Create Account
                </Button>
              </Container>}

              {user &&
              <Container maxWidth="xs">
               <Button
                  name="gameSelection"
                  fullWidth
                  variant="contained"
                  href="gameSelection"
                  sx={{ mt: 3, mb: 2 }}
                >
                  gameSelection
                </Button>
                
              </Container>}
              
            </Box>
          </Container>
        </ThemeProvider>
      </main>
    </div>
  );
}

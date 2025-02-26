import Head from "next/head";
import styles from "../styles/Home.module.css";
import * as React from "react";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useAuth} from '../stores/firebase'
import NewsCard from "../components/newsarticle";
import Stack from "@mui/material/Stack";
import Link from "next/link";
const theme = createTheme();

export default function Home() {
  const currentUser = useAuth();

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
              {!currentUser && (
                <Container maxWidth="xs">
                  <Link href="/authContext">
                  <Button
                    name="LogIn"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up/Log In
                  </Button>
                  </Link>
                </Container>
              )}

              {currentUser && (
                <div>
                  <br></br>
                  <br></br>
                  <Typography textAlign="center">
                    Now that you are all set up with an account, choose some
                    video games and technology companies to follow so we can
                    show you news based on your interests!
                  </Typography>
                  <Container maxWidth="xs">
                    <Button
                      name="gameSelection"
                      fullWidth
                      variant="contained"
                      href="gameSelection"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Choose Games/Tech To Follow
                    </Button>
                  </Container>
                </div>
              )}
            </Box>
          </Container>
        </ThemeProvider>
        <Stack
          direction="column"
          spacing={2}
          sx={{ paddingLeft: "25%", paddingTop: "2%" }}
        >
          <NewsCard
            title="Elden Ring Sorceress Sellen Quest Guide"
            description=" There are an abundance of NPCs and side quests in Elden Ring, but if you're focused on a particular playstyle, you'll want to know which ones to really focus on. Sorceress Sellen, as you'd expect, is one to seek if you're playing as a magic build. Sorceress Sellen can be found early on in the game and is a disgraced member of the Academy of Raya Lucaria. Working with her awards multiple spells and gear, specialized for magic wielders. Here is how to complete Sorceress Sellen's quest."
            image="https://assets.xboxservices.com/assets/1d/5b/1d5bc84f-2135-4e2f-8ca6-bb000d97db7f.jpg?n=Elden-Ring_GLP-Poster-Image-1084_1920x1080.jpg"
            link="https://www.gamespot.com/articles/elden-ring-sorceress-sellen-quest-guide/1100-6501705/"
            likeNumber="22"
          />

          <NewsCard
            title="How Europe has expanded its bid to disrupt Big Tech"
            description=" The European Union’s co-legislators reached political agreement on a major reform of digital competition rules late yesterday, which will introduce up-front obligations and restrictions (literally a list of “dos and don’ts”) on the most powerful internet giants — enforced by the threat of substantial fines and other types of penalties if they fail to meet the requirements."
            image="https://techcrunch.com/wp-content/uploads/2021/06/GettyImages-1229220975.jpg?w=1390&crop=1"
            link="https://techcrunch.com/2022/03/25/how-europe-has-expanded-its-bid-to-disrupt-big-tech/"
            likeNumber="22"
          />
        </Stack>
      </main>
    </div>
  );
}
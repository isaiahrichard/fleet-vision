"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  const handleClick = (route: string) => {
    router.push(route);
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.backgroundTopLeft} />
      <Box className={styles.backgroundTopRight} />
      <Box className={styles.content}>
        <Typography className={styles.welcomeText}>
          Welcome to
          <br />
          <span className={styles.accentPrimary}>Fleet Vision</span>
        </Typography>
        <Typography className={styles.subtitleText}>
          The all-in-one solution for fleet management
        </Typography>
      </Box>
      <Box className={styles.footer}>
        <Button
          variant="contained"
          onClick={() => handleClick("/signup")}
          className={styles.buttonPrimary}
        >
          Get Started
        </Button>
        <Button
          variant="contained"
          onClick={() => handleClick("/signin")}
          className={styles.buttonSecondary}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}

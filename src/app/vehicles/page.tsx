// Wrapper component for the signin page

"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { NavBar } from "@/components/Navbar/Navbar";

export default function Vehicles() {
  const router = useRouter();

  return (
    <Box>
      <Box className={styles.pageContainer}>Vehicles</Box>
    </Box>
  );
}

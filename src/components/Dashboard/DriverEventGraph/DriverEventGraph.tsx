import React, { useState } from "react";
import styles from "./DriverEventGraph.module.css";
import { Typography, Box } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

interface TempData {
  name: string;
  count: number;
}

const data: TempData[] = [
  { name: "Texting (Right)", count: 85 },
  { name: "Phone call (Right)", count: 191 },
  { name: "Texting (Left)", count: 66 },
  { name: "Phone call (Left)", count: 77 },
  { name: "Radio", count: 234 },
  { name: "Drinking", count: 142 },
  { name: "Reach Side", count: 94 },
  { name: "Hair and Makeup", count: 187 },
  { name: "Talking to passenger", count: 120 },
  { name: "Reach Backseat", count: 178 },
  { name: "Drowsy", count: 243 },
];

const sortedData: TempData[] = data
  .sort((a, b) => b.count - a.count)
  .slice(0, 7);

export default function DriverEventGraph() {
  return (
    <Box className={styles.container}>
      <Typography
        variant="h5"
        fontWeight={500}
        fontSize={28}
        textAlign="center"
      >
        Most Common Driver Events
      </Typography>
      <Box className={styles.chartContainer}>
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: sortedData.map((element: TempData) => element.name),
            },
          ]}
          series={[
            { data: sortedData.map((element: TempData) => element.count) },
          ]}
        />
      </Box>
    </Box>
  );
}

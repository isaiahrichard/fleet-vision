import React, { useState } from "react";
import styles from "./VehicleHealthGraph.module.css";
import { Typography, Box } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

export default function VehicleHealthGraph() {
  return (
    <Box>
      <BarChart
        xAxis={[{ scaleType: "band", data: ["group A", "group B", "group C"] }]}
        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
        width={500}
        height={300}
      />
    </Box>
  );
}

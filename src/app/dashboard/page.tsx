// Wrapper component for the signin page

"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./page.module.css";
import SafetyScoreChart from "@/components/Dashboard/SafetyScoreChart/SafetyScoreChart";
import VehicleHealthList from "@/components/Dashboard/VehicleHealthList/VehicleHealthList";
import DriverEventGraph from "@/components/Dashboard/DriverEventGraph/DriverEventGraph";
import MetricCard from "@/components/Dashboard/MetricCard/MetricCard";
import { vehicleErrorData } from "@/components/Dashboard/VehicleHealthList/types";

export default function Dashboard() {
  return (
    <Box className={styles.pageContainer}>
      <Typography variant="h4" fontWeight={500} mb={1}>
        Analytics Overview
      </Typography>
      <Box className={styles.metricCardContainer}>
        <MetricCard
          title="Safest Drivers"
          value={95}
          subtext="Isaiah Richards"
          extraInfo="Kia Forte"
        />
        <MetricCard
          title="Worst Drivers"
          value={71}
          subtext="John Doe"
          extraInfo="Toyota Corolla"
        />
        <MetricCard
          title="Temp Card"
          value={50}
          subtext="Temporary Name"
          extraInfo="Temp Info"
        />
      </Box>
      <DriverEventGraph />
      <Box className={styles.topBox}>
        <SafetyScoreChart />
        <VehicleHealthList vehicleErrors={vehicleErrorData} />
      </Box>
    </Box>
  );
}

// Wrapper component for the signin page

"use client";
import React from "react";
import Box from "@mui/material/Box";
import styles from "./page.module.css";
import SafetyScoreChart from "@/components/Dashboard/SafetyScoreChart/SafetyScoreChart";
import SafetyScoreList from "@/components/Dashboard/SafetyScoreList/SafetyScoreList";
import VehicleHealthGraph from "@/components/Dashboard/VehicleHealthGraph/VehicleHealthGraph";
import DriverEventGraph from "@/components/Dashboard/DriverEventGraph/DriverEventGraph";

const drivers = [
  { name: "Isaiah Richards", score: 85, currentVehicle: "Kia Forte" },
  { name: "John Doe", score: 92, currentVehicle: "Toyota Corolla" },
  { name: "Jane Smith", score: 78, currentVehicle: "Honda Civic" },
  { name: "Emily Johnson", score: 95, currentVehicle: "Ford Focus" },
  { name: "Michael Brown", score: 88, currentVehicle: "Chevrolet Malibu" },
  { name: "Sarah Davis", score: 81, currentVehicle: "Nissan Altima" },
  { name: "David Wilson", score: 89, currentVehicle: "Hyundai Elantra" },
];

export default function Dashboard() {
  return (
    <Box>
      <Box className={styles.safetyScoreContainer}>
        <SafetyScoreChart />
        <Box className={styles.driverSafetyListContainer}>
          <SafetyScoreList isSafestDrivers={true} driverDisplayList={drivers} />
          <SafetyScoreList
            isSafestDrivers={false}
            driverDisplayList={drivers}
          />
        </Box>
      </Box>
      <Box className={styles.metricsContainer} gap={10}>
        <Box flexGrow={1}>
          <VehicleHealthGraph />
        </Box>
        <Box flexGrow={2}>
          <DriverEventGraph />
        </Box>
      </Box>
    </Box>
  );
}

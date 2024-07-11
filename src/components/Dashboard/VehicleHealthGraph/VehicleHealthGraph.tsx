import React, { useState } from "react";
import styles from "./VehicleHealthGraph.module.css";
import { Typography, Box } from "@mui/material";
import { vehicleData, VehicleDisplayError } from "./types";

export default function VehicleHealthGraph() {
  const formatDisplayTime = (timestamp: string): string => {
    const date = new Date(timestamp);
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    let hours = date.getHours();
    const ampm = hours >= 12 ? "pm" : "am";
    const mins = date.getMinutes().toString();
    const displayMins = mins.length < 2 ? "0" + mins : mins;
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${month} ${day} ${hours}:${displayMins}${ampm}`;
  };

  return (
    <Box className={styles.container}>
      <Typography
        variant="h5"
        fontWeight={500}
        fontSize={24}
        textAlign="center"
      >
        Vehicle Maintenance Alerts
      </Typography>
      <Box className={styles.errorListContainer}>
        {vehicleData.slice(0, 4).map((vehicleInfo, index) => (
          <Box className={styles.ErorrContainer}>
            <Typography className={styles.errorTime} bgcolor="red">
              {formatDisplayTime(vehicleInfo.timestamp)}
            </Typography>
            <Box display="flex" flexDirection="column">
              <Typography textAlign="center" borderBottom="1px solid black">
                {vehicleInfo.description}
              </Typography>
              <Box className={styles.errorAdditionalInfo}>
                <Typography
                  textAlign="center"
                  width="100%"
                  borderRight="1px solid black"
                >
                  Code: {vehicleInfo.OBDCode}
                </Typography>
                <Typography textAlign="center" width="100%">
                  ID: {vehicleInfo.vehicleID}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

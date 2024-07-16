// Wrapper component for the signin page

"use client";
import React, { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import styles from "./page.module.css";
import { driverData, Driver, driverColumns } from "./types";
import { HealthAndSafety, DriveEta } from "@mui/icons-material";

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        pl: 1,
        pr: 1,
        pb: 2,
        pt: 1,
        display: "flex",
      }}
    >
      <GridToolbarQuickFilter
        style={{ flex: 1 }}
        quickFilterParser={(searchInput: string) =>
          searchInput
            .split(",")
            .map((value) => value.trim())
            .filter((value) => value !== "")
        }
        debounceMs={400}
      />
    </Box>
  );
}

function noDriverSelected() {
  return (
    <Box>
      <Typography fontSize={32} textAlign="center">
        No Driver Selected
      </Typography>
      <Image
        src="/images/drivericon.png"
        alt="Description of the image"
        width={400}
        height={400}
        style={{ opacity: 0.5 }}
      />
      <Typography textAlign="center">
        Select a driver to see a detailed view
      </Typography>
    </Box>
  );
}

interface TempData {
  name: string;
  count: number;
}

const recentDriverBehaviourStats: TempData[] = [
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

const sortedDriverBehaviour: TempData[] = recentDriverBehaviourStats
  .sort((a, b) => b.count - a.count)
  .slice(0, 4);

export default function Drivers() {
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);

  return (
    <Box className={styles.container}>
      <Box className={styles.leftBox}>
        <DataGrid
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          disableMultipleRowSelection
          disableColumnMenu
          hideFooter
          autosizeOnMount
          columns={driverColumns}
          rows={driverData}
          slots={{ toolbar: QuickSearchToolbar }}
          onRowSelectionModelChange={(id) => {
            const selectedRowData = driverData.filter(
              (row) => id[0] == row.id
            )[0];
            setSelectedDriver(selectedRowData);
          }}
          slotProps={{
            toolbar: {
              showquickfilter: true,
            },
          }}
          sx={{
            "& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus": {
              outline: "none",
            },
            "& .Mui-selected": {
              backgroundColor: "var(--accent-primary) !important",
              color: "white",
            },
          }}
        />
      </Box>
      <Box className={styles.rightBox}>
        {selectedDriver ? (
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Typography fontSize={32} textAlign="center">
              {selectedDriver?.name}
            </Typography>
            <Box className={styles.status}>
              <Typography className={styles.statusTitle}>
                {selectedDriver.status}
              </Typography>
              <Box
                className={styles.statusIcon}
                bgcolor={selectedDriver.status == "Online" ? "green" : "red"}
              />
            </Box>
            <Image
              src="/images/personIcon.png"
              alt="profile pic"
              width={300}
              height={300}
              style={{ opacity: 0.5 }}
            />
            <Divider flexItem />
            <Box display="flex" className={styles.infoContainer}>
              <Box className={styles.innerInfoContainer}>
                <DriveEta />
                <Typography noWrap>{selectedDriver.currentVehicle}</Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box className={styles.innerInfoContainer}>
                <HealthAndSafety />
                <Typography>{selectedDriver.safetyScore}</Typography>
              </Box>
            </Box>
            <Divider flexItem />
            <Box className={styles.behaviourContainer}>
              <Box className={styles.behaviourTitleBox}>
                <Typography textAlign="center" fontSize={24}>
                  <Typography className={styles.largeTitle}>TOP</Typography>
                  Driver Behaviours
                </Typography>
              </Box>
              <Box className={styles.behaviourListContainer}>
                {sortedDriverBehaviour.map((driverBehaviour, index) => (
                  <Box key={index} className={styles.behaviourPill}>
                    <Typography px={1} minWidth={200}>
                      {driverBehaviour.name}
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    <Typography px={1}>{driverBehaviour.count}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        ) : (
          noDriverSelected()
        )}
      </Box>
    </Box>
  );
}

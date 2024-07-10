// Wrapper component for the signin page

"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { NavBar } from "@/components/Navbar/Navbar";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const columns = [
  {
    field: "title",
    headerName: "Title",
    resizable: false,
  },
  {
    field: "gross",
    headerName: "Gross",
    resizable: false,
  },
  {
    field: "company",
    headerName: "Company",
    resizable: false,
  },
  {
    field: "director",
    headerName: "Director",
    resizable: false,
  },
  {
    field: "year",
    headerName: "Year",
  },
  {
    field: "cinematicUniverse",
    headerName: "Cinematic Universe",
    resizable: false,
  },
];

const rows = [
  {
    id: 0,
    title: "Avatar",
    gross: 2847246203,
    company: "20th Century Fox",
    director: "temp",
    year: 2009,
  },
  {
    id: 1,
    title: "Avengers: Endgame",
    gross: 2797501328,
    company: "Disney Studios",
    year: 2019,
    director: "temp",
    cinematicUniverse: "Marvel Cinematic Universe",
  },
  {
    id: 2,
    title: "Titanic",
    gross: 2187425379,
    company: "20th Century Fox",
    director: "temp",
    year: 1997,
  },
  {
    id: 3,
    title: "Star Wars: The Force Awakens",
    gross: 2068223624,
    company: "Disney Studios",
    director: "temp",
    year: 2015,
    cinematicUniverse: "Star Wars",
  },
  {
    id: 4,
    title: "Avengers: Infinity War",
    gross: 2048359754,
    company: "Disney Studios",
    director: "temp",
    year: 2018,
    cinematicUniverse: "Marvel Cinematic Universe",
  },
  {
    id: 5,
    title: "Spider-Man: No Way Home",
    gross: 1892768346,
    company: "Disney Studios",
    director: "temp",
    year: 2021,
    cinematicUniverse: "Marvel Cinematic Universe",
  },
  {
    id: 6,
    title: "Jurassic World",
    gross: 1671713208,
    company: "Universal Pictures",
    director: "temp",
    year: 2015,
    cinematicUniverse: "Jurassic Park",
  },
  {
    id: 7,
    title: "The Lion King",
    gross: 1656943394,
    company: "Disney Studios",
    director: "temp",
    year: 2019,
  },
  {
    id: 8,
    title: "The Avengers",
    gross: 1518812988,
    company: "Disney Studios",
    director: "temp",
    year: 2012,
    cinematicUniverse: "Marvel Cinematic Universe",
  },
  {
    id: 9,
    title: "Furious 7",
    gross: 1516045911,
    company: "Universal Pictures",
    director: "temp",
    year: 2015,
    cinematicUniverse: "Fast & Furious",
  },
  {
    id: 10,
    title: "Frozen II",
    gross: 1450026933,
    company: "Disney Studios",
    director: "temp",
    year: 2019,
    cinematicUniverse: "Frozen",
  },
];

export default function Drivers() {
  const router = useRouter();

  return (
    <Box>
      <DataGrid
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableColumnMenu
        hideFooter
        autosizeOnMount
        columns={columns}
        rows={rows}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </Box>
  );
}

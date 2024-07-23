// Wrapper component for the signin page

"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Divider } from "@mui/material";
import styles from "./page.module.css";
import { LiveFrame, initLiveData, Event, initEventData } from "./types";
import { getLiveLabels } from "@/utils/axios";

const MINUTE_MS = 60000;

export default function Demo() {
  const [livePredictStream, setLivePredictStream] =
    useState<LiveFrame[]>(initLiveData);
  const [frameCount, setFrameCount] = useState<number>(0);

  const [events, setEvents] = useState<Event[]>(initEventData);

  const getData = () => {
    const response = getLiveLabels();
    response.then((res) => {
      if (res.status == 200) {
        const labelData = [
          ...res.data.eyes_predictions,
          res.data.actions_predictions,
        ];
        setLivePredictStream([...livePredictStream, ...labelData]);
      }
      setTimeout(getData, 1000);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (livePredictStream.length > 100) {
      removeFrames();
    }
  }, [livePredictStream]);

  const removeFrames = () => {
    let tempArr = livePredictStream.filter((element, index) => index >= 16);
    setLivePredictStream(tempArr);
  };

  return (
    <Box className={styles.pageContainer}>
      <Box className={styles.cameraContainer}>
        <Box>
          <Typography variant="h6" textAlign="center">
            Face Cam
          </Typography>
          <Box className={styles.cameraWrapper}>FACE</Box>
        </Box>
        {/* <Box>
          <Typography variant="h6" textAlign="center">
            Body Cam
          </Typography>
          <Box className={styles.cameraWrapper}>BODY</Box>
        </Box> */}
      </Box>
      <Box className={styles.listContainer}>
        <Box className={styles.liveClasContainer}>
          <Typography variant="h5" textAlign={"center"} fontWeight={500}>
            Live Frame Classification
          </Typography>
          {events.map((prediction, index) => (
            <Box key={index} className={styles.liveClasBox}>
              <Typography textAlign={"center"} width={150}>
                {prediction.label}
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Typography
                textAlign={"center"}
                width={150}
              >{`From: Frame #${prediction.frameStart}`}</Typography>
              <Divider orientation="vertical" flexItem />
              <Typography
                textAlign={"center"}
                width={150}
              >{`To: Frame #${prediction.frameEnd}`}</Typography>
            </Box>
          ))}
        </Box>
        <Box className={styles.liveClasContainer}>
          <Typography variant="h5" textAlign={"center"} fontWeight={500}>
            Event Feed
          </Typography>
          {livePredictStream.map((prediction, index) => (
            <Box key={index} className={styles.liveClasBox}>
              <Typography
                textAlign={"center"}
                width={150}
              >{`Frame #${prediction.count}`}</Typography>
              <Divider orientation="vertical" flexItem />
              <Typography textAlign={"center"} width={150}>
                {prediction.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

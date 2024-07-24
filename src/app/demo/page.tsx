// Wrapper component for the signin page

"use client";
import React, { useState, useEffect, act } from "react";
import { Box, Typography, Divider } from "@mui/material";
import styles from "./page.module.css";
import { LiveFrame, Event, ModelResponse } from "./types";

export default function Demo() {
  const [livePredictStream, setLivePredictStream] = useState<LiveFrame[]>([]);

  const [events, setEvents] = useState<Event[]>([]);

  const [frame, setFrame] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource(`http://127.0.0.1:5000/video_feed`);
    eventSource.onmessage = (event) => {
      const data: ModelResponse = JSON.parse(event.data);
      // setFrame(data.image);
      // if (data.action_event != 0) {
      //   addEvent(data.action_event);
      // }
      addLivePredictions(data.actions_predictions, data.first_frame_num);
    };
    return () => {
      eventSource.close();
    };
  }, []);

  const addEvent = (action_event: any) => {
    if (!events.length) {
      setEvents({ ...action_event, camera: "Face" });
      return;
    }
    const prevEvent = { ...events.slice(-1)[0] };
    if (
      prevEvent.label == action_event.label &&
      action_event.frameStart - prevEvent.frameEnd < 15
    ) {
      const newEvents = [
        ...events.slice(0, -1),
        { ...prevEvent, frameEnd: action_event.frameEnd },
      ];
      setEvents(newEvents);
    } else {
      setEvents([...events, { ...action_event, camera: "Face" }]);
    }
  };

  const addLivePredictions = (predictions: string[], startingFrame: string) => {
    const transformPredictions: LiveFrame[] = predictions.map(
      (prediction, index) => ({
        value: prediction,
        frameNum: parseInt(startingFrame) + index,
        camera: "Face",
      })
    );
    transformPredictions.reverse();

    setLivePredictStream((livePredictStream) =>
      [...transformPredictions].concat(livePredictStream)
    );
  };

  const removeLivePredictions = () => {
    let tempArr = livePredictStream.slice(0, 80);
    setLivePredictStream(tempArr);
  };

  useEffect(() => {
    if (livePredictStream.length > 150) {
      removeLivePredictions();
    }
  }, [livePredictStream]);

  const videoSource = frame
    ? URL.createObjectURL(new Blob([frame], { type: "image/jpeg" }))
    : "";

  return (
    <Box className={styles.pageContainer}>
      <Box className={styles.cameraContainer}>
        <Box>
          <Typography variant="h6" textAlign="center">
            Face Cam
          </Typography>
          <Box className={styles.cameraWrapper}>
            <video
              src={videoSource}
              autoPlay
              controls
              className={styles.video}
            />
          </Box>
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
            Event Feed
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
            Live Frame Classification
          </Typography>
          {livePredictStream.map((prediction, index) => (
            <Box key={index} className={styles.liveClasBox}>
              <Typography
                textAlign={"center"}
                width={150}
              >{`Frame #${prediction.frameNum}`}</Typography>
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

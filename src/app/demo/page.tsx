// Wrapper component for the signin page

"use client";
import React, { useState, useEffect, act } from "react";
import { Box, Typography, Divider } from "@mui/material";
import styles from "./page.module.css";
import { LiveFrame, Event } from "./types";
import Image from "next/image";

export default function Demo() {
  const [livePredictStream, setLivePredictStream] = useState<LiveFrame[]>([]);

  const [events, setEvents] = useState<Event[]>([]);

  const [frame, setFrame] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource(`http://127.0.0.1:5000/video_feed`);
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.action_event != 0) {
        addEvent(data.action_event.replaceAll("'", '"'));
        setFrame(data.image);
      }
      addLivePredictions(data.actions_predictions, data.first_frame_num);
    };
    return () => {
      eventSource.close();
    };
  }, []);

  const addEvent = (action_event: any) => {
    const transformedEvent = {
      ...JSON.parse(action_event),
      camera: "Face",
    };
    setEvents((events) => [transformedEvent].concat(events));
    // const prevEvent = { ...events.slice(-1)[0] };
    // if (
    //   prevEvent.label == action_event.label &&
    //   action_event.frameStart - prevEvent.frameEnd < 15
    // ) {
    //   console.log("Getting Here");
    //   const newEvents = [
    //     ...events.slice(0, -1),
    //     { ...prevEvent, frameEnd: action_event.frameEnd },
    //   ];
    //   setEvents(newEvents);
    // } else {
    //   console.log("Getting Here 2");
    //   setEvents([...events, { ...action_event, camera: "Face" }]);
    // }
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
            <Image
              src={videoSource}
              className={styles.video}
              alt="live feed"
              width={300}
              height={300}
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

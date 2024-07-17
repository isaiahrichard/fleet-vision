import React, { useState } from "react";
import { Box } from "@mui/material";
import styles from "./navbar.module.css";
import { useRouter, usePathname } from "next/navigation";
import { Notifications, Settings, Person } from "@mui/icons-material";
import { useNotificationContext } from "@/context/NotificationContext";

export const NotificationMenu = () => {
  const router = useRouter();
  const pathName = usePathname();

  const { count, notifications } = useNotificationContext();
  const [modalOpen, setModalOpen] = useState(false);

  return <Box className={styles.notifMenu}>TEST TEST TEST TEST TEST</Box>;
};

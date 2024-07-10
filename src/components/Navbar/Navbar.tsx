import { Box } from "@mui/material";
import styles from "./navbar.module.css";
import { useRouter, usePathname } from "next/navigation";
import HelpIcon from "@mui/icons-material/Help";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";

export const NavBar = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <Box className={styles.pageContainer}>
      <Box className={styles.tabContainer}>
        <Box className={styles.navBarTitle}>Fleet Vision</Box>
        <Box
          className={[
            styles.tab,
            pathName == "/dashboard" && styles.active,
          ].join(" ")}
          onClick={() => router.push("/dashboard")}
        >
          Dashboard
        </Box>
        <Box
          className={[styles.tab, pathName == "/drivers" && styles.active].join(
            " "
          )}
          onClick={() => router.push("/drivers")}
        >
          Drivers
        </Box>
        <Box
          className={[
            styles.tab,
            pathName == "/vehicles" && styles.active,
          ].join(" ")}
          onClick={() => router.push("/vehicles")}
        >
          Vehicles
        </Box>
      </Box>
      <Box className={styles.iconContainer}>
        <HelpIcon className={styles.icon} />
        <NotificationsIcon className={styles.icon} />
        <SettingsIcon className={styles.icon} />
        <PersonIcon className={styles.icon} />
        <Box>Isaiah Richards</Box>
      </Box>
    </Box>
  );
};

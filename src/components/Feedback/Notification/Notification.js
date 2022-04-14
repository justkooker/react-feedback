import React from "react";
import styles from "./Notification.module.css";
const Notification = ({ total }) => {
  return (
    total === 0 && <p className={styles.Notification}>No feedback given</p>
  );
};
export default Notification;

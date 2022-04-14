import React from "react";
import styles from "./FeedbackStatistic.module.css";
const FeedbackStatistic = ({ good, bad, neutral, total, positiveFeedback }) => {
  return (
    total !== 0 && (
      <div className={styles.container}>
        <span className={styles.FeedbackStatistic}>
          good:<span>{good}</span>
        </span>
        <span className={styles.FeedbackStatistic}>
          neutral:<span>{neutral}</span>
        </span>
        <span className={styles.FeedbackStatistic}>
          bad:<span>{bad}</span>
        </span>
        <span className={styles.FeedbackStatistic}>
          total:<span>{total}</span>
        </span>
        <span className={styles.FeedbackStatistic}>
          positive feddback:<span> {positiveFeedback}%</span>
        </span>
      </div>
    )
  );
};

export default FeedbackStatistic;

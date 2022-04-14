import React from "react";
import styles from "./FeedbackOption.module.css";

const FeedbackOption = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map((option, idx) => (
        <button
          key={idx}
          className={styles.btn}
          onClick={() => onLeaveFeedback(option)}
          type="button"
        >
          {option}
        </button>
      ))}
    </>
  );
};
export default FeedbackOption;

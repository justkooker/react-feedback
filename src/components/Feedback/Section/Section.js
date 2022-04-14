import React from "react";
import styles from "./Section.module.css";
const Section = ({ title, children }) => {
  return (
    <section className={styles.Section}>
      <p className={styles.SectionTitle}>{title}</p>
      {children}
    </section>
  );
};
export default Section;

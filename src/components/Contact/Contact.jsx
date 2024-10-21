import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <div className={styles.resumeSection}>
        <a href="/public/Resume.pdf" download="Resume">
          Download Resume
        </a>
      </div>
    </footer>
  );
};

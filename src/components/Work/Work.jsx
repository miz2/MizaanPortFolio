import React from "react";
import styles from "./Work.module.css"; // Correct way to import CSS Modules
import data from "../../data/experience.json"; // Import JSON data

const Work = () => {
  const portfolioData = data.portfolio[0];

  return (
    <div className={styles.workContainer} id="work">
      <h2 className={styles.experienceTitle}>Experience</h2>

      <div className={styles.portfolioContainer}>
        <img
          src={portfolioData.logo.src} 
          alt={portfolioData.logo.alt}
          className={styles.portfolioLogo}
        />
        <h2 className={styles.portfolioCompany}>{portfolioData.company}</h2>
        <h3 className={styles.portfolioRole}>{portfolioData.role}</h3>
        <p className={styles.portfolioDesignation}>{portfolioData.designation}</p>
        <p className={styles.portfolioJoinDate}>Joined: {portfolioData.joinDate}</p>
        <p className={styles.portfolioDescription}>{portfolioData.description}</p>
      </div>
    </div>
  );
};

export default Work;
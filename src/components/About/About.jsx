import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.textContent}>
        <p>
          I am a proactive developer who continuously engages in personal
          projects and self-learning initiatives to enhance my skills. Although
          I haven't had formal work experience yet, I have developed various web
          applications and experimented with different technologies to deepen my
          knowledge and improve my proficiency.
        </p>
        <p>
          My journey as a full-stack developer is fueled by my dedication to
          staying updated with the latest trends and best practices in web
          development. I take pride in my ability to adapt to new challenges,
          solve complex problems, and collaborate effectively within a team.
        </p>
        <p>
          My expertise in HTML5, CSS3, and JavaScript allows me to build
          responsive and interactive websites, while my knowledge of back-end
          technologies like Node.js, Express.js, and databases such as MongoDB
          and MySQL enables me to create robust full-stack applications.
          Additionally, my familiarity with tools like Git, Docker, and various
          JavaScript libraries ensures that I can manage and streamline
          development workflows efficiently.
        </p>
        <p>
          I also have experience with React for building dynamic user interfaces
          and have worked with Jenkins for continuous integration and delivery
          pipelines. My proficiency in Linux and shell scripting helps me automate
          tasks and manage systems effectively. Furthermore, my knowledge of
          Kubernetes and Docker enables me to deploy and manage containerized
          applications in a scalable manner. I am also gaining foundational
          knowledge in Azure to explore cloud-based solutions and services.
        </p>
        <p>
          Furthermore, my skills in Data Structures and Algorithms (DSA) with
          Java empower me to write efficient and optimized code, making my
          applications not only functional but also highly performant. This
          knowledge is crucial in solving complex problems and improving the
          overall quality of the software I develop.
        </p>
        <p>
          In addition to technical skills, I value the importance of
          communication, collaboration, and leadership in the software
          development process. I enjoy working in dynamic team environments
          where sharing knowledge and ideas leads to innovative solutions and
          continuous improvement.
        </p>
      </div>
    </section>
  );
};

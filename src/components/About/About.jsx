import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.textContent}>
        <p>
          I am a proactive developer who continuously engages in personal
          projects and self-learning initiatives to enhance my skills. Currently, 
          I am working as an <strong>Associate Automation Engineer</strong> at <strong>ANM India Pvt Ltd</strong>, 
          where I focus on automating business processes using <strong>Automation Anywhere</strong> and other RPA tools 
          to improve efficiency and reduce manual effort.
        </p>
        <p>
          My journey as a full-stack developer is fueled by my dedication to
          staying updated with the latest trends and best practices in web
          development. I take pride in my ability to adapt to new challenges,
          solve complex problems, and collaborate effectively within a team.
        </p>
        <p>
          My expertise in <strong>HTML5, CSS3, and JavaScript</strong> allows me to build
          responsive and interactive websites, while my knowledge of back-end
          technologies like <strong>Node.js, Express.js</strong>, and databases such as
          <strong>MongoDB and MySQL</strong> enables me to create robust full-stack applications.
          Additionally, my familiarity with tools like <strong>Git, Docker</strong>, and various
          JavaScript libraries ensures that I can manage and streamline
          development workflows efficiently.
        </p>
        <p>
          I also have experience with <strong>React</strong> for building dynamic user interfaces
          and have worked with <strong>Jenkins</strong> for continuous integration and delivery
          pipelines. My proficiency in <strong>Linux and shell scripting</strong> helps me automate
          tasks and manage systems effectively. Furthermore, my knowledge of
          <strong>Kubernetes and Docker</strong> enables me to deploy and manage containerized
          applications in a scalable manner. I am also gaining foundational
          knowledge in <strong>Azure</strong> to explore cloud-based solutions and services.
        </p>
        <p>
          Additionally, my skills in <strong>Data Structures and Algorithms (DSA)</strong> with
          <strong>Java</strong> empower me to write efficient and optimized code, making my
          applications not only functional but also highly performant. This
          knowledge is crucial in solving complex problems and improving the
          overall quality of the software I develop.
        </p>
        <p>
          Beyond technical skills, I value the importance of
          <strong>communication, collaboration, and leadership</strong> in the software
          development process. I enjoy working in dynamic team environments
          where sharing knowledge and ideas leads to innovative solutions and
          continuous improvement.
        </p>
      </div>
    </section>
  );
};

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#experience">Skills</Link>
          </li>
          <li>
            <Link to="/#projects">Projects</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
          <li>
            <Link to="/certificate" className={styles.cer}>
              Certifications
            </Link>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mizaan-ur-rehman-278706249/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />{" "}
              <span className={styles.navText}>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/miz2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />{" "}
              <span className={styles.navText}>GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

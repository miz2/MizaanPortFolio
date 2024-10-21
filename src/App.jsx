import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import CertificateSlider from "./components/CertificateSlider";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
// Scroll to hash anchor when location changes
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <ScrollToHash /> {/* Ensure this is inside Router */}
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
                <Footer/>
              </>
            }
          />
          <Route path="/certificate" element={<CertificateSlider />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

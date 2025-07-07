import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home.jsx";
import Project from "./components/Project/Project.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Cursor from "./components/Cursor/Cursor.jsx";
import About from "./components/About/About.jsx";
import Loader from "./components/Loader/Loader.jsx";
import Tool from "./components/Tools/Tools.jsx";
import SplinePreloader from "./components/SplinePreloader/SplinePreloader.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    // Minimum loading time of 3 seconds
    const minLoadTime = setTimeout(() => {
      if (splineLoaded) {
        setLoading(false);
      }
    }, 3000);

    // If Spline takes longer than 8 seconds, proceed anyway
    const maxLoadTime = setTimeout(() => {
      setLoading(false);
    }, 8000);

    return () => {
      clearTimeout(minLoadTime);
      clearTimeout(maxLoadTime);
    };
  }, [splineLoaded]);

  // Handle when Spline finishes loading
  const handleSplineLoad = () => {
    setSplineLoaded(true);
    // If minimum time has passed, hide loader
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div>
      {/* Preload Spline in background */}
      <SplinePreloader onLoad={handleSplineLoad} />
      
      {loading ? (
        <Loader splineLoaded={splineLoaded} />
      ) : (
        <>
          <Cursor />
          <section id="Home">
            <Navbar />
            <Home splineReady={splineLoaded} />
          </section>

          <section id="About">
            <About />
          </section>

          <section id="Tools">
            <Tool />
          </section>

          <div id="Projects">
            <Project />
          </div>

          <section id="Contacts">
            <Contact />
          </section>
        </>
      )}
    </div>
  );
}
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

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Cursor />
          <section id="Home">
            <Navbar />
            <Home />
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

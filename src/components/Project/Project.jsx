import { useRef } from "react";
import React from "react";

import "./Project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Project = () => {
  const items = [
    {
      id: 1,
      title: "MANAV-Codeforces",
      description:
        "MANAV-Codeforces is a MERN stack website that enhances competitive programming on Codeforces with features like user profile displays, problem lists, a LeetCode-inspired interface with an online code editor, and real-time data updates. It includes tools for comparing friends' solved problems, running code in multiple languages, saving drafts, and using AI for problem explanations. The site also offers elegant dark mode, quick input copying, and a random problem generator.",
      image: "project1.png",
      link: "https://github.com/992manav/ManavCodeforces",
    },
    {
      id: 2,
      title: "MANAV Project Manager",
      description:
        "MANAV Project Manager is a full-stack application with a frontend built using HTML, CSS, and JavaScript, and a backend developed with the MERN stack. It helps users store and manage data about their projects, including GitHub links, project images, project names, tech stack used, and live hosted links. The platform provides an organized interface for tracking and showcasing project details efficiently.",
      image: "project2.png",
      link: "https://github.com/992manav/ManavProjectManager",
    },
    {
      id: 3,
      title: "Airbnb Clone",
      description:
        "Airbnb Clone is a web application that replicates the core functionalities of Airbnb, including property listings, booking management, and reviews. It offers a user-friendly interface for browsing accommodations, making reservations. The platform aims to provide a similar experience to Airbnb with a custom-designed interface and additional features.",
      image: "project3.png",
    },
    {
      id: 4,
      title: "LNMIIT Network Login Extension",
      description:
        "LNMIIT Network Login Extension is a browser extension designed to simplify and automate the login process for the LNMIIT network. It provides a user-friendly interface to enter login credentials and handles the authentication process seamlessly. The extension ensures quick access to the network while maintaining security and ease of use.",
      image: "project4.png",
      link: "https://github.com/992manav/Manav-Lnmiit-Network-Login-Extension",
    },
    {
      id: 5,
      title: "ASCII Art Maker",
      description:
        "ASCII Art Maker is a web application that converts images into ASCII art. Users can upload images, and the tool will generate a text-based representation of the image in various styles. The platform provides a simple and intuitive interface for creating and customizing ASCII art, making it easy to convert images into creative text art for use in various projects.",
      image: "project5.png",
      link: "https://github.com/992manav/Ascii-art",
    },
  ];

  const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    return (
      <section ref={ref}>
        <div className="container">
          <div className="image-container">
            <img src={item.image} alt={item.title} />
          </div>

          <motion.div className="text-container" style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.link}>See Demo</a>
          </motion.div>
        </div>
      </section>
    );
  };
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>

      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Project;

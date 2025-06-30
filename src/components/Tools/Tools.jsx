import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import {
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
} from "react-icons/fa";
import { DiMongodb, DiMysql } from "react-icons/di";
import { SiSass, SiTailwindcss, SiGit } from "react-icons/si";
import "./Tool.scss";

const Tool = () => {
  const [key, setKey] = useState(0);

  const variants = {
    initial: {
      x: -500,
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const handleReset = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div
      className="technologies"
      initial="initial"
      animate="animate"
      variants={variants}
    >
      <h2>Technologies and Tools I Master</h2>

      <button onClick={handleReset}>Reset Positions</button>
      <div className="wrapper-tools">
        <motion.div className="tech-categories">
          {/* Frontend Technologies */}
          <div className="tech-icons">
            <motion.div
              className="tech-item html5"
              key={`html5-${key}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaHtml5 title="HTML5" />
              <p>HTML5</p>
            </motion.div>
            <motion.div
              className="tech-item css3"
              key={`css3-${key}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaCss3Alt title="CSS3" />
              <p>CSS3</p>
            </motion.div>
            <motion.div
              className="tech-item javascript"
              key={`js-${key}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaJsSquare title="JavaScript" />
              <p>JavaScript</p>
            </motion.div>
            <motion.div
              className="tech-item react"
              key={`react-${key}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <RiReactjsLine title="React.js" />
              <p>React.js</p>
            </motion.div>
            <motion.div
              className="tech-item bootstrap"
              key={`bootstrap-${key}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaBootstrap title="Bootstrap" />
              <p>Bootstrap</p>
            </motion.div>
            <motion.div
              className="tech-item sass"
              key={`sass-${key}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <SiSass title="Sass" />
              <p>Sass</p>
            </motion.div>
            <motion.div
              className="tech-item tailwindcss"
              key={`tailwind-${key}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <SiTailwindcss title="Tailwind CSS" />
              <p>Tailwind CSS</p>
            </motion.div>
          </div>

          {/* Backend Technologies */}
          <div className="tech-icons">
            <motion.div
              className="tech-item nodejs"
              key={`nodejs-${key}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaNodeJs title="Node.js" />
              <p>Node.js</p>
            </motion.div>
            <motion.div
              className="tech-item mongodb"
              key={`mongodb-${key}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <DiMongodb title="MongoDB" />
              <p>MongoDB</p>
            </motion.div>
            <motion.div
              className="tech-item mysql"
              key={`mysql-${key}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <DiMysql title="MySQL" />
              <p>MySQL</p>
            </motion.div>
            <motion.div
              className="tech-item database"
              key={`db-${key}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaDatabase title="SQL Databases" />
              <p>SQL Databases</p>
            </motion.div>
            <motion.div
              className="tech-item git"
              key={`git-${key}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <SiGit title="Git" />
              <p>Git</p>
            </motion.div>
          </div>
        </motion.div>
        <div className="text">
          <h3>🎨 My Tech Stack! 🛠️</h3>
          <p>
            These are the technologies I use to build amazing web applications. 
            Each tool serves a specific purpose in creating modern, scalable, 
            and user-friendly solutions. 🌟
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tool;
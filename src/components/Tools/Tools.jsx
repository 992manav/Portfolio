import React, { useState, useRef } from "react";
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
  const constraintsRef = useRef(null);
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

  const dragTransition = {
    // bounce: 100,
  };

  return (
    <div
      className="technologies"
      initial="initial"
      animate="animate"
      variants={variants}
    >
      <h2>Technologies and Tools I Master</h2>

      <button onClick={handleReset}>Reset</button>
      <div className="wrapper-tools">
        <motion.div className="tech-categories" ref={constraintsRef}>
          {/* Frontend Technologies */}
          <div className="tech-icons">
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragTransition={dragTransition}
              className="tech-item html5"
              key={`html5-${key}`}
            >
              <FaHtml5 title="HTML5" />
              <p>HTML5</p>
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragTransition={dragTransition}
              className="tech-item css3"
              key={`css3-${key}`}
            >
              <FaCss3Alt title="CSS3" />
              <p>CSS3</p>
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragTransition={dragTransition}
              className="tech-item javascript"
              key={`js-${key}`}
            >
              <FaJsSquare title="JavaScript" />
              <p>JavaScript</p>
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragTransition={dragTransition}
              className="tech-item react"
              key={`react-${key}`}
            >
              <RiReactjsLine title="React.js" />
              <p>React.js</p>
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragTransition={dragTransition}
              className="tech-item bootstrap"
              key={`bootstrap-${key}`}
            >
              <FaBootstrap title="Bootstrap" />
              <p>Bootstrap</p>
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragTransition={dragTransition}
              className="tech-item sass"
              key={`sass-${key}`}
            >
              <SiSass title="Sass" />
              <p>Sass</p>
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragTransition={dragTransition}
              className="tech-item tailwindcss"
              key={`tailwind-${key}`}
            >
              <SiTailwindcss title="Tailwind CSS" />
              <p>Tailwind CSS</p>
            </motion.div>
          </div>

          {/* Backend Technologies */}
          <div className="tech-icons">
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragTransition={dragTransition}
              className="tech-item nodejs"
              key={`nodejs-${key}`}
            >
              <FaNodeJs title="Node.js" />
              <p>Node.js</p>
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragTransition={dragTransition}
              className="tech-item mongodb"
              key={`mongodb-${key}`}
            >
              <DiMongodb title="MongoDB" />
              <p>MongoDB</p>
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragTransition={dragTransition}
              className="tech-item mysql"
              key={`mysql-${key}`}
            >
              <DiMysql title="MySQL" />
              <p>MySQL</p>
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragTransition={dragTransition}
              className="tech-item database"
              key={`db-${key}`}
            >
              <FaDatabase title="SQL Databases" />
              <p>SQL Databases</p>
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragTransition={dragTransition}
              className="tech-item git"
              key={`git-${key}`}
            >
              <SiGit title="Git" />
              <p>Git</p>
            </motion.div>
          </div>
        </motion.div>
        <div className="text">
          <h3>🎨 Have Fun Rearranging Your Tech Stack! 🛠️</h3>
          <p>
            Dive into the tech playground! Drag and drop the technologies to
            organize them just the way you like. 🕹️ Hit the "Reset" button if
            you want to shake things up and start fresh. 🌀
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tool;

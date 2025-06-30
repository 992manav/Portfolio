import React from "react";
import { motion } from "framer-motion";
import "./About.scss";

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
      staggerChildren: 0.4,
    },
  },
};

const eduvariants = {
  initial: {
    x: 500,
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.4,
    },
  },
};

const About = () => {
  return (
    <>
      <motion.div
        className="about-me"
        initial="initial"
        whileInView="animate"
        variants={variants}
      >
        <motion.header
          className="about-me-header"
          initial="initial"
          whileInView="animate"
          variants={variants}
        >
          <h1>About Me</h1>
        </motion.header>
        <motion.div
          className="about-me-introduction"
          initial="initial"
          whileInView="animate"
          variants={variants}
        >
          <ul>
            <li>
              I am a Full Stack Web Developer with a passion for creating
              dynamic and responsive web applications. I have a strong
              background in both frontend and backend technologies, dedicated to
              developing high-quality solutions that enhance user experiences
              and solve real-world problems.
            </li>
            <li>
              I possess a solid understanding of data structures and algorithms
              (DSA), and I am proficient in languages such as C and Python.
            </li>
            <li>
              I actively participate in competitive programming on Codeforces,
              which helps me sharpen my problem-solving skills.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="about-me-education"
          initial="initial"
          whileInView="animate"
          variants={eduvariants}
        >
          <h2>Education</h2>
          <ul>
            <li>
              I completed my schooling at Jh Ambani School, Surat, where I
              developed a strong foundation in mathematics and science, sparking
              my interest in technology and programming. I then completed my
              higher secondary education at RMG Maheshwari School.
            </li>
            <li>
              I am pursuing my undergraduate studies at the LNM Institute of
              Information Technology, working towards a BTech degree in Computer
              Science and Engineering.
            </li>
          </ul>
        </motion.div>
      </motion.div>
      <div className="about-background"></div>
    </>
  );
};

export default About;
import React from "react";
import { motion } from "framer-motion";
import "./Home.scss";
import { Typewriter } from "react-simple-typewriter";
const textVariants = {
  initial: {
    x: 500,
    opacity: 0,
    scale: 0.9,
    rotate: 15,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
      ease: "easeOut",
      type: "spring",
      bounce: 0.3,
    },
  },
};

const childVariants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  initial: {
    x: -500,
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1.1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const Home = () => {
  return (
    <div className="hero">
      <motion.div
        className="imageContainer"
        variants={imageVariants}
        initial="initial"
        animate="animate"
      >
        <motion.img
          src="about-removebg.png"
          alt="Manav Desai"
          width="600"
          height="400"
        />
      </motion.div>

      <div className="wrapper">
        <motion.div
          className="text-container"
          initial="initial"
          animate="animate"
          variants={textVariants}
        >
          <motion.h1 variants={childVariants}>Manav Desai</motion.h1>
          <motion.p variants={childVariants}>
            <div style={{ fontSize: "80px", fontWeight: "bold" }}>
              I'm a{" "}
              <Typewriter
                words={[
                  "Full-Stack Web Developer",
                  "Competitive Programmer",
                  "Open Source Contributor",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </motion.p>
          {/* <a href="https://www.manavdesai.com/resume" target="_blank" rel="noopener noreferrer">
            View My Resume
          </a> */}

          <div className="buttons">
            <motion.a
              href="#Projects"
              variants={childVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button>See the Latest Work</button>
            </motion.a>
            <motion.a
              href="#Contacts"
              variants={childVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button>Contact Me</button>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

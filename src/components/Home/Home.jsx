import React from "react";
import { motion } from "framer-motion";
import "./Home.scss";
import { Typewriter } from "react-simple-typewriter";

const textVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const imageVariants = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        {/* Profile Image */}
        <motion.div
          className="imageContainer"
          variants={imageVariants}
          initial="initial"
          animate="animate"
        >
          <motion.img
            src="about-removebg.png"
            alt="Manav Desai"
            className="profile-image"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-container"
          initial="initial"
          animate="animate"
          variants={textVariants}
        >
          <motion.h1 variants={childVariants}>Manav Desai</motion.h1>
          <motion.div className="role-text" variants={childVariants}>
            <div className="typewriter-container">
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
          </motion.div>

          {/* Buttons */}
          <motion.div className="buttons" variants={childVariants}>
            <motion.a
              href="#Projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button>See the Latest Work</button>
            </motion.a>
            <motion.a
              href="#Contacts"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button>Contact Me</button>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
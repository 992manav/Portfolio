import React from "react";
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';
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

// Mobile-friendly variants with reduced motion
const mobileVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  // Check if it's mobile screen
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  
  // Use mobile variants for mobile screens
  const animationVariants = isMobile ? mobileVariants : variants;
  const eduAnimationVariants = isMobile ? mobileVariants : eduvariants;

  return (
    <>
      {/* Interactive Spline 3D Background */}
      <motion.div 
        className="spline-about-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{ pointerEvents: 'auto' }} // Ensure pointer events are enabled
      >
        <Spline 
          scene="https://prod.spline.design/SL0D3RQf1b1TUDkr/scene.splinecode"
          style={{ 
            width: '100%', 
            height: '100%',
            pointerEvents: 'auto',
            cursor: 'grab'
          }}
        />
      </motion.div>

      <motion.div
        className="about-me"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }}
        variants={animationVariants}
      >
        <motion.header
          className="about-me-header"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.5 }}
          variants={animationVariants}
        >
          <h1>About Me</h1>
        </motion.header>
        <motion.div
          className="about-me-introduction"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
          variants={animationVariants}
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
          viewport={{ once: false, amount: 0.3 }}
          variants={eduAnimationVariants}
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
    </>
  );
};

export default About;
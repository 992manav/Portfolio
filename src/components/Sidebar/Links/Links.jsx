import React from "react";
import { motion } from "framer-motion";

const Links = () => {
  const items = ["Home", "About", "Projects", "Contacts"];

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        delayChildren: 0.2,
      },
    },
  };

  const linkvariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((link) => (
        <motion.a
          key={link}
          href={`#${link}`}
          variants={linkvariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {link}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;

import React from "react";
import { motion } from "framer-motion";

const Links = ({ setOpen }) => {
  const items = ["Home", "About", "Tools", "Projects", "Contacts"];

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

  const handleLinkClick = (link) => {
    // Close sidebar when link is clicked
    setOpen(false);
    
    // Small delay to allow sidebar to close before scrolling
    setTimeout(() => {
      const element = document.getElementById(link);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300);
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
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick(link);
          }}
        >
          {link}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
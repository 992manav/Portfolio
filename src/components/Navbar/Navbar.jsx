import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="logo1.png"></img>
        </motion.span>
        <div className="socials">
          <a href="">
            <SocialIcon url="https://www.instagram.com/992manav/" />
          </a>
          <a href="">
            <SocialIcon url="https://github.com/992manav" />
          </a>
          <a href="">
            <SocialIcon url="https://linkedin.com/in/manav-desai-985aab326" />
          </a>
          <a href="">
            <SocialIcon
              bgColor="red"
              fgColor="blue"
              url="mailto:23ucs639@lnmiit.ac.in"
            />
          </a>
          <a href="">
            <SocialIcon network="whatsapp" url="https://wa.me/9328947223" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

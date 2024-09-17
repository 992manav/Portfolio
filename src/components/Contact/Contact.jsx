import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3nsn4zi", "template_dbaqxih", form.current, {
        publicKey: "qCQOOOrxkxGRgGeQp",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const variants = {
    initial: {
      y: -500,
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="contact"
      initial="initial"
      whileInView="animate"
      variants={variants}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        <motion.div className="items" variants={variants}>
          <h2>Mail</h2>
          <p>23ucs639@lnmiit.ac.in</p>
        </motion.div>
        <motion.div className="items" variants={variants}>
          <h2>Address</h2>
          <p>Lnmiit, Jaipur</p>
        </motion.div>
        <motion.div className="items" variants={variants}>
          <h2>Phone</h2>
          <p>9328947223</p>
        </motion.div>
      </motion.div>

      <motion.div className="FormContainer" variants={variants}>
        <form ref={form} onSubmit={sendEmail}>
          <motion.input
            type="text"
            name="user_name"
            placeholder="Your Name"
            variants={variants}
          />
          <motion.input
            type="email"
            name="user_email"
            placeholder="Your Email"
            variants={variants}
          />
          <motion.textarea
            name="message"
            placeholder="Message"
            variants={variants}
          />
          <motion.button type="submit" variants={variants}>
            Send
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;

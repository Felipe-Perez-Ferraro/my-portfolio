import React from "react";
import { motion } from "framer-motion";
import "../about/about.css";
import Comeback from "../../components/comeback/Comeback";

function About() {
  return (
    <div className="about">
      <Comeback />
      <motion.div
        className="infoContainer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.4,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="info">
          <h3 className="quien">About Me</h3>
          <p className="description">
          I am a young man with a strong passion for the world of development. Through various courses, I have acquired knowledge in HTML, CSS, JavaScript, and React, allowing me to create dynamic and interactive web applications. Currently, I am focused on expanding my skills further by diving into the realm of full-stack development through the Microverse program. This comprehensive program is equipping me with the necessary tools and expertise to excel in both front-end and back-end development. I am enthusiastic about honing my abilities and embracing new challenges in pursuit of becoming a well-rounded and proficient developer.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;

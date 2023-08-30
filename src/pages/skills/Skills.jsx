import React from "react";
import Comeback from "../../components/comeback/Comeback";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/js.png";
import reactImg from "../../assets/react.png";
import java from "../../assets/java.png";
import baseDeDatos from "../../assets/base-de-datos.png";
import ingles from "../../assets/ingles.png";
import { motion } from "framer-motion";
import "./skills.css";

function Skills() {
  return (
    <div className="skillsGral">
      <Comeback />
      <div className="Container">
        <motion.div
          className="html"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <div>
            <h1 className="title">My Skills</h1>
          </div>
        </motion.div>
        <div className="skillsContainer">
          {/*HTML CONTAINER*/}
          <motion.div
            className="html"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <div>
              <img className="imgIcon" src={html} alt="java" />
              <h2 className="skillsTitle">HTML</h2>
            </div>
          </motion.div>

          {/*CSS CONTAINER*/}
          <motion.div
            className="css"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <div>
              <img className="imgIcon" src={css} alt="java" />
              <h2 className="skillsTitle">CSS</h2>
            </div>
          </motion.div>

          {/*JAVASCRIPT CONTAINER*/}
          <motion.div
            className="css"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <div>
              <img className="imgIcon" src={javascript} alt="java" />
              <h2 className="skillsTitle">JavaScript</h2>
            </div>
          </motion.div>

          {/*REACT CONTAINER*/}
          <motion.div
            className="css"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.6,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <div>
              <img className="imgIcon" src={reactImg} alt="java" />
              <h2 className="skillsTitle">React.JS</h2>
            </div>
          </motion.div>

          {/*JAVA CONTAINER*/}
          <motion.div
            className="css"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.7,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <div>
              <img className="java imgIcon" src={java} alt="java" />
              <h2 className="skillsTitle">Java</h2>
            </div>
          </motion.div>

          {/*SQL CONTAINER*/}
          <motion.div
            className="css"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.8,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <div>
              <img className="sql imgIcon" src={baseDeDatos} alt="sql" />
              <h2 className="skillsTitle">SQL</h2>
            </div>
          </motion.div>

          {/*INGLES CONTAINER*/}
          <motion.div
            className="css"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.9,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <div>
              <img className="english imgIcon" src={ingles} alt="ingles" />
              <h2 className="skillsTitle">Inglés</h2>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

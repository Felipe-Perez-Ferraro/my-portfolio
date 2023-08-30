import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./comeback.css";
import { motion } from "framer-motion";

function Comeback() {
  return (
    <>
      <Link to="/">
        <motion.div
          className="comeback"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.2,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <FaArrowLeft className="arrowLink" />
          <p className="comebackText">Back</p>
        </motion.div>
      </Link>
    </>
  );
}

export default Comeback;

// Backdrop.js
import React from "react";
import { motion } from "framer-motion";

function Backdrop({ onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  );
}

export default Backdrop;
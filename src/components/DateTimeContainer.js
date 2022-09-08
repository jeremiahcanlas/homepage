import React from "react";
import Greeting from "./Greeting";
import Time from "./Time";
import { motion } from "framer-motion";

const DateTimeContainer = () => {
  return (
    <motion.div
      className="time-container"
      initial={{ y: 60 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h2>
        <Greeting />
      </h2>
      <Time />
    </motion.div>
  );
};

export default DateTimeContainer;

import React from "react";
import "./style.css";
import { motion as m } from "framer-motion";

const NoItem = ({ item }) => {
  return (
    <m.div className="no__content">
      <m.div>No {item}.</m.div>
    </m.div>
  );
};

export default NoItem;

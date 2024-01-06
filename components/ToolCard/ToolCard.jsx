"use client";
import React from "react";
import "./toolCard.css";
import { motion as m } from "framer-motion";

const ToolCard = ({ data }) => {
  const itemVariants = {
    hidden: {
      opacity: 0,
      transition: {
        striffness: 300,
        damping: 24,
        transitionEnd: { y: -48 },
        type: "spring",
      },
      y: -150,
    },
    visible: {
      opacity: 1,
      transition: { mass: 0.1, restDelta: 0.00001, type: "spring" },
      y: 0,
    },
  };
  return (
    <m.div
      className="toolCard"
      variants={itemVariants}
      whileInView={"visible"}
      initial={"hidden"}
      exit={"hidden"}
    >
      <div className="tool__description">
        <div className="tool__title">{data.toolName}</div>
        <div className="tool__subtitle">{data.toolDescription}</div>
      </div>
      <div
        className="tool__icon"
        dangerouslySetInnerHTML={{ __html: data.toolSVG }}
      ></div>
    </m.div>
  );
};

export default ToolCard;

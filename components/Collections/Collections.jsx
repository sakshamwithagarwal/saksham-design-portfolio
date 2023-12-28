'use client'
import React from "react";
import Link from "next/link";
import "./collections.css";
import { motion } from "framer-motion";
import { portfolioFont } from "@/utils/fonts";

const Collections = () => {
  return (
    <motion.section
      className="collections"
      id="collections"
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ ease: "easeInOut", delay: 0 }}
    >
      <div className="section_title">
        <h3 className={portfolioFont.className}>Collections</h3>
      </div>
      <div className="section_container">
        <ul>
          <Link href="/collection">
            <li></li>
          </Link>
          <Link href="/collection">
            <li></li>
          </Link>
          <Link href="/collection">
            <li></li>
          </Link>
          <Link href="/collection">
            <li></li>
          </Link>
        </ul>
      </div>
    </motion.section>
  );
};

export default Collections;

"use client";
import React from "react";
import Link from "next/link";
import "./collections.css";
import { motion } from "framer-motion";
import { portfolioFont } from "@/utils/fonts";
import Render from "./3DRender";
import Posters from "./Posters";
import Sketchs from "./Sketchs";
import Photographs from "./Photographs";
import ViewIcon from "./ViewIcon";

const Collections = () => {
  const collectionsList = [
    {
      title: "3D Renders",
      description:
        "Masterful 3D renders revealing the product design & rendering skills.",
      icon: <Render />,
      url: "/collection/3DRenders",
    },
    {
      title: "Posters",
      description:
        "Engaging layouts that captivate and communicate at a glance.",
      icon: <Posters />,
      url: "/collection/Posters",
    },
    {
      title: "Sketches",
      description: "Dynamic sketches showcasing product design potential.",
      icon: <Sketchs />,
      url: "/collection/Sketches",
    },
    {
      title: "Photographs",
      description: "Captivating photography capturing the essence of design.",
      icon: <Photographs />,
      url: "/collection/Photographs",
    },
  ];
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
          {collectionsList.map((collection, idx) => (
            <Link key={collection.title + ":" + idx} href={collection.url}>
              <li className="collection__tile">
                <div className={`collection__title ${portfolioFont.className}`}>
                  <h2>{collection.title}</h2>
                  <p>{collection.description}</p>
                </div>
                <div className="collection__visuals">
                  <div className="view_icon-collection">
                    <div className="icon-wrapper">
                    <svg
                      width={35}
                      height={34}
                      viewBox="0 0 35 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="listIcon"
                    >
                      <path
                        d="M 2 32.4674 L 33 2 M 35 2 H 10.0462 M 33 0 V 24.4981"
                        strokeWidth={3.8}
                        strokeMiterlimit={14}
                      />
                    </svg>
                    </div>
                    View
                  </div>
                  {/* <ViewIcon /> */}
                  <div className="collection__icon-wrapper">
                    {collection.icon}
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Collections;

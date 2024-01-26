"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { open_sans, portfolioFont } from "@/utils/fonts";
import Image from "next/image";

const Project = ({ data }) => {
  const [isTouched, setIsTouched] = useState(false);

  const myLoader=({src})=>{
    return data.projectThumbnail.url;
  }  

  const handleTouchStart = () => {
    setIsTouched(true);
  };

  const handleTouchEnd = () => {
    setIsTouched(false);
  };

  const creatMarkup = (str) => {
    return { __html: str };
  };

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <Link href={`/project/${data.slug}`}>
      <motion.li
        className="project hoverable"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={variants}
        initial="hidden"
        exit={"hidden"}
        whileInView={"visible"}
      >
        <div className="thumbnail_wrapper">
          <img src={data.projectThumbnail.url} alt={data.projectThumbnail.fileName} className="project__thumbnail" />
          {/* <Image
            loader={myLoader}
            src={data.projectThumbnail.url}
            className="project__thumbnail"
            alt={data.projectThumbnail.fileName}
            width={data.projectThumbnail.width}
            height={data.projectThumbnail.height}
          /> */}
        </div>
        <div className="project_container">
          <div className={`project__title ${portfolioFont.className}`}>
            {" "}
            {data.projectName}{" "}
          </div>
          <p className={`project__description ${portfolioFont.className}`}>
            {data.projectDescription}
          </p>
          <div className={`project__tags ${open_sans.className}`}>
            {data.tags.map((tag) => (
              <div className="project_tag" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </motion.li>
    </Link>
  );
};

export default Project;

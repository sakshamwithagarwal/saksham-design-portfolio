'use client'
import React, { useState, useEffect, forwardRef } from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import { portfolioFont } from "@/utils/fonts";

const AllProjects = forwardRef((props, ref) => {
  // useEffect(() => {
  //   projectData.sort((a, b) => {
  //     return a.priority - b.priority;
  //   })
  // }, [projectData]);
  return (
    <section className="projects" ref={ref} id="projects">
      <motion.div
        className={`section_title ${portfolioFont.className}`}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <h3>Projects</h3>
      </motion.div>
      <div className="section_container">
        {!props.projects ? (
          "Loading"
        ) : (
          <motion.ol
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", delay: 0 }}
          >
            {props.projects &&
              props.projects.map((project, id) => (
                <Project key={project.id} data={project} />
              ))}
          </motion.ol>
        )}
      </div>
    </section>
  );
});

export default AllProjects;

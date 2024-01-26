"use client";
import Project from "./Project";
import { motion } from "framer-motion";
import { portfolioFont } from "@/utils/fonts";
import "./project.css";
import Link from "next/link";

const AllProjects = (props) => {
  // useEffect(() => {
  //   projectData.sort((a, b) => {
  //     return a.priority - b.priority;
  //   })
  // }, [projectData]);
  return (
    <section className="projects" id="projects">
      <motion.div
        className={`section_title ${portfolioFont.className}`}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <h3>Featured Projects</h3>
        <Link href="/project">
          <div className="see-more-btn">
            <span>see all projects </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M25.25 13C25.25 19.7655 19.7655 25.25 13 25.25C6.23451 25.25 0.75 19.7655 0.75 13C0.75 6.23451 6.23451 0.75 13 0.75C19.7655 0.75 25.25 6.23451 25.25 13Z"
                stroke="var(--text-main)"
                stroke-width="1.5"
              />
              <path
                d="M11.0607 18.7778L10.7071 18.4242L15.5353 13.596L15.8889 13.2424L15.5353 12.8889L10.7071 8.06066L11.0607 7.70711L16.596 13.2424L11.0607 18.7778Z"
                stroke="var(--text-main)"
              />
            </svg>
          </div>
        </Link>
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
};

export default AllProjects;

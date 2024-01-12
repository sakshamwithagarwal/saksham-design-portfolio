"use client";
import { useState } from "react";
import { motion as m } from "framer-motion";
import "./project.css";

import { open_sans, portfolioFont } from "@/utils/fonts";
import { AllProjects } from "@/components";
import NoItem from "@/components/NoChildren/NoItem";

const AllProjectsPage = ({ projects }) => {
  const filters = ["Product", "Packaging", "Visual Identity", "UI/UX"];
  const [filterSelected, setFilterSelected] = useState(false);
  const [filterActive, setFilterActive] = useState("");
  const handleClick = (f) => {
    !filterSelected ? setFilterActive(f) : setFilterActive("");
    setFilterSelected(!filterSelected);
  };

  const filterByTag = (projects) => {
    return projects.filter((el) =>
      el.tags.some((t) => t.includes(filterActive))
    );
  };

  const filtered = filterByTag(projects);

  const variants = {
    header: {
      hidden: { opacity: 0, y: 48 },
      visible: { opacity: 1, y: 0 },
    },
    filter: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
  };

  return (
    <m.div
      className="all-projects"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <m.div
        variants={variants.header}
        transition={{ duration: 0.3 }}
        className={`projects__title custom_header ${portfolioFont.className}}`}
      >
        <m.h1>My Projects.</m.h1>
        <m.h3>Diving deep into my full-scale design process!</m.h3>
      </m.div>

      <div className="project__filters">
        <m.div
          className={`${open_sans.className} title`}
          style={{ fontWeight: 600 }}
          variants={variants.filter}
          transition={{ duration: 0.3 }}
        >
          Filter by:
        </m.div>
        <m.div
          className="filter__wrapper"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ staggerChildren: 0.2, staggerDirection: 1 }}
        >
          {filters.map((filter, idx) => (
            <m.div
              variants={variants.filter}
              transition={{ staggerChildren: 0.3, staggerDirection: 1, duration: 0.2 }}
              // transition={{ staggerChildren: 0.1 }}
              key={idx}
              className={filterSelected ? "filter selected" : "filter"}
              style={
                filterSelected && filterActive !== filter
                  ? { display: "none" }
                  : {}
              }
              onClick={() => handleClick(filter)}
            >
              <m.span>{filter}</m.span>
              {filterActive ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <path
                    d="M1 1L10 10M10 1L1 10"
                    stroke="var(--text-main)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                ""
              )}
            </m.div>
          ))}
        </m.div>
      </div>
      {filtered.length ? <AllProjects projects={filtered} /> : <NoItem item={'Projects'}/>}
    </m.div>
  );
};

export default AllProjectsPage;

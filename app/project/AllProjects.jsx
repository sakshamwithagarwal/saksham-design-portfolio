"use client";
import { useState } from "react";
import "./project.css";

import { open_sans, portfolioFont } from "@/utils/fonts";
import { AllProjects } from "@/components";

const AllProjectsPage = ({ projects }) => {
  const filters = ["Product", "Packaging", "Visual Identity", "UI/UX"];
  const [filterSelected, setFilterSelected] = useState(false);
  const [filterActive, setFilterActive] = useState("");
  const handleClick = (f) => {
    !filterSelected ? setFilterActive(f) : setFilterActive("");
    setFilterSelected(!filterSelected)
  };

  const filterByTag = (projects) => {
    return projects.filter((el) =>
      el.tags.some((t) => t.includes(filterActive))
    );
  };

  const filtered = filterByTag(projects)

  return (
    <div className="all-projects">
      <div
        className={`projects__title custom_header ${portfolioFont.className}}`}
      >
        <h1>My Projects.</h1>
        <h3>Diving deep into my full-scale design process!</h3>
      </div>

      <div className="project__filters">
        <div
          className={`${open_sans.className} title`}
          style={{ fontWeight: 600 }}
        >
          Filter by:
        </div>
        <div className="filter__wrapper">
          {filters.map((filter, idx) => (
            <div
              key={idx}
              className={filterSelected ? "filter selected" : "filter"}
              style={
                filterSelected && filterActive !== filter
                  ? { display: "none" }
                  : {}
              }
              onClick={() => handleClick(filter)}
            >
              <span>{filter}</span>
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
            </div>
          ))}
        </div>
      </div>
      {filtered.length ? <AllProjects projects={filtered} /> : "No Projects"}
    </div>
  );
};

export default AllProjectsPage;

// 'use client'
// import { useEffect } from "react";
// import locomotiveScroll from "locomotive-scroll";
import "./project.css";
import ExpandedProject from "./ExpandedProject";
import request from "graphql-request";
import { baseUrl } from "@/app/page";

async function getProject(params) {
  const response = await fetch(`${baseUrl}/api/Projects/${params.slug}`);

  if (!response.ok) {
    throw new Error("Error while fetching All projects.");
  }

  return response.json();
}

const Project = async ({ params }) => {
  const project = await getProject(params);
  return <ExpandedProject project={project.project} />;
};

export default Project;

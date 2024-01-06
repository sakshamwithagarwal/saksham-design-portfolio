// 'use client'
// import { useEffect } from "react";
// import locomotiveScroll from "locomotive-scroll";
import "./project.css";
import ExpandedProject from "./ExpandedProject";
import request from "graphql-request";

async function getProject(params) {
  const projectQuery = {
    PROJECT_QUERY: `
    {
      project(where: {slug: "${params.slug}"}) {
        id
        projectName
        projectThumbnail {
          url
        }
        slug
        projectContent {
          html
        }
      }
    }
  `,
    endPointURL:
      "https://api-ap-south-1.hygraph.com/v2/clha5gtcw11sx01taepog266q/master",
  };

  const { project } = await request(
    projectQuery.endPointURL,
    projectQuery.PROJECT_QUERY
  );

  // console.log('project datatatatta', project);
  return project;
}

const Project = async ({ params }) => {
  console.log("slug", params);

  const project = await getProject(params);
  return <ExpandedProject project={project} />;
};

export default Project;

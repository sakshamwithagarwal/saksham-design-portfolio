import React from "react";
import AllProjectsPage from "./AllProjects";
import { request } from "graphql-request";

const getProjects = async () => {
  try {
    const { projects } = await request(
      "https://ap-south-1.cdn.hygraph.com/content/clha5gtcw11sx01taepog266q/master",
      `
        query Projects {
          projects {
            id
            projectName
            projectDescription
            projectThumbnail {
              url
              height
              width
              fileName
            }
            tags
            slug
            projectContent {
              html
            }
          }
        }
        `
    );

    return projects;
  } catch (err) {
    throw new Error("Failed to fetch all projects.");
  }
};

const Page = async () => {
  const projectsData = await getProjects();

  return <AllProjectsPage projects={projectsData} />;
};

export default Page;

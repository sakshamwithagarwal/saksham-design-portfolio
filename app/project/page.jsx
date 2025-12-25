import React from "react";
import AllProjectsPage from "./AllProjects";
import { getApiUrl } from "@/lib/getApiUrl";

const getProjects = async () => {
  const response = await fetch(
    `${getApiUrl()}/api/project`, { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Error while fetching more projects.");
  }
  return response.json();
};

const Page = async () => {
  const projectsData = await getProjects();

  return <AllProjectsPage projects={projectsData} />;
};

export default Page;

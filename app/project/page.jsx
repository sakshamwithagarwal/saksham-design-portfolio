import React from "react";
import AllProjectsPage from "./AllProjects";

const getProjects = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/project`, {next: {revalidate: 3600}}
  );

  if (!response.ok) {
    throw new Error("Error while fetching All projects.");
  }
  return response.json();
};

const Page = async () => {
  const projectsData = await getProjects();

  return <AllProjectsPage projects={projectsData} />;
};

export default Page;

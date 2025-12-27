import React from "react";
import AllProjectsPage from "./AllProjects";
import { getApiUrl } from "@/lib/getApiUrl";

export const dynamic = 'force-dynamic';

const getProjects = async () => {
  try {
    const response = await fetch(
      `${getApiUrl()}/api/project`, { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Error while fetching more projects.");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

const Page = async () => {
  const projectsData = await getProjects();

  return <AllProjectsPage projects={projectsData} />;
};

export default Page;

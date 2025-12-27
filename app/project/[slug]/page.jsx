import "./project.css";
import ExpandedProject from "./ExpandedProject";
import { getApiUrl } from "@/lib/getApiUrl";

export const dynamic = 'force-dynamic';

async function getProject(slug) {
  try {
    const baseUrl = await getApiUrl();
    const response = await fetch(
      `${baseUrl}/api/project/${slug}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Error while fetching one project.");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

const Project = async ({ params }) => {
  const project = await getProject(params.slug);
  if (!project) {
    return <div>Project not found</div>;
  }
  return <ExpandedProject project={project} />;
};

export default Project;

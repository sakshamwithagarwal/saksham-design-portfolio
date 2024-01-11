import "./project.css";
import ExpandedProject from "./ExpandedProject";

async function getProject(slug) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${slug}`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    throw new Error("Error while fetching one project.");
  }

  return response.json();
}

const Project = async ({ params }) => {
  const project = await getProject(params.slug);
  return <ExpandedProject project={project} />;
};

export default Project;

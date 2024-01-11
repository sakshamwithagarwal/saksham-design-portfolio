import "./project.css";
import ExpandedProject from "./ExpandedProject";

async function getProject(params) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${params.slug}`,
    { next: {revalidate: 3600} }
  );

  if (!response.ok) {
    throw new Error("Error while fetching one project.");
  }

  return response.json();
}

const Project = async ({ params }) => {
  const project = await getProject(params);
  return <ExpandedProject project={project} />;
};

export default Project;

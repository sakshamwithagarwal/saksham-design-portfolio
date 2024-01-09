import { AllProjects, Collections, Main } from "@/components";
import { request } from "graphql-request";

export const baseUrl =
process.env.NODE_ENV === "production"
  ? "https://saksham-design-portfolio.vercel.app/"
  : "http://localhost:3000";

const getProjects = async () => {
  const response = await fetch(`${baseUrl}/api/Projects`)
  if(!response.ok) {
    throw new Error('Error while fetching All projects.');
  }

  return response.json();
}

export default async function Home() {
  const projectsData = await getProjects()

  return (
    <div>
      <Main />
      <AllProjects projects={projectsData.projects} />
      <Collections />
    </div>
  );
}

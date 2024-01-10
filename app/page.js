import { AllProjects, Collections, Main } from "@/components";

const getProjects = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api`
  );
  if (!response.ok) {
    throw new Error("Error while fetching All projects.");
  }
  return response.json();
};

export default async function Home() {
  const projectsData = await getProjects();

  return (
    <div>
      <Main />
      <AllProjects projects={projectsData} />
      <Collections />
    </div>
  );
}

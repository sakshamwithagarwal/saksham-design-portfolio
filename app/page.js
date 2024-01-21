import { AllProjects, Collections, Main, Background } from "@/components";

const getProjects = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Error while fetching All projects.");
  }
  return response.json();
};

export default async function Home() {
  const projectsData = await getProjects();

  return (
    <div>
      <Background />
      <Main />
      <AllProjects projects={projectsData} />
      <Collections />
    </div>
  );
}

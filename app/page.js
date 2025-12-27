import { AllProjects, Collections, Main, Footer } from "@/components";
import { getApiUrl } from "@/lib/getApiUrl";

export const dynamic = 'force-dynamic';

const getProjects = async () => {
  try {
    const response = await fetch(`${getApiUrl()}/api`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Error while fetching All projects.");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    // Return empty array during build or on error
    return [];
  }
};

const sortByPriority = (data) => {
  return data.sort((a, b) => {
    return a.priority - b.priority
  })
}

export default async function Home() {
  const projectsData = await getProjects();
  const projectSorted = sortByPriority(projectsData)

  return (
    <div>
      <Main />
      <AllProjects projects={projectSorted} />
      <Collections />
      <Footer />
    </div>
  );
}

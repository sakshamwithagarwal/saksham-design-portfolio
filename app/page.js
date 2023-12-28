import { AllProjects, Collections, Main } from "@/components";
import { request } from "graphql-request";

async function getProjects() {
  const { projects } = await request("https://api-ap-south-1.hygraph.com/v2/clha5gtcw11sx01taepog266q/master",
  `
  query Projects {
    projects {
      id
      projectName
      projectDescription
      projectThumbnail {
        url
        height
        width
        fileName
      }
      tags
      slug
      projectContent {
        html
      }
    }
  }
  `);

  return projects;
}

export default async function Home() {
  const projectsData = await getProjects()
  return (
    <div>
      <Main />
      <AllProjects projects={projectsData} />
      <Collections />
    </div>
  );
}

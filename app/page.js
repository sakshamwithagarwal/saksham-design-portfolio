import { AllProjects, Collections, Main } from '@/components'

async function getProjects() {
  const res = await fetch(
    "https://api-ap-south-1.hygraph.com/v2/clha5gtcw11sx01taepog266q/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query Projects {
          projects {
            id
            projectName
            projectDescription
            projectThumbnail {
              url
            }
            tags
            slug
            projectContent {
              html
            }
          }
        }
        `
      }),
    }
  );
  const data = await res.json();
  return data.data.projects;
}

export default async function Home() {
  const projectsData = await getProjects();
  return (
    <div>
      <Main />
      <AllProjects projects={projectsData} />
      <Collections />
    </div>
  )
}

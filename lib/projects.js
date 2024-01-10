import { request } from "graphql-request";

export const getAllProjects = async () => {
  const { projects } = await request(
    "https://api-ap-south-1.hygraph.com/v2/clha5gtcw11sx01taepog266q/master",
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
      `
  );
  return projects;
};

export const getSingleProject = async (slug) => {
  const projectQuery = {
    PROJECT_QUERY: `
            {
              project(where: {slug: "${slug}"}) {
                id
                projectName
                projectThumbnail {
                  url
                }
                slug
                projectContent {
                  html
                }
              }
            }
          `,
    endPointURL:
      "https://api-ap-south-1.hygraph.com/v2/clha5gtcw11sx01taepog266q/master",
  };

  const { project } = await request(
    projectQuery.endPointURL,
    projectQuery.PROJECT_QUERY
  );


  return project;
};

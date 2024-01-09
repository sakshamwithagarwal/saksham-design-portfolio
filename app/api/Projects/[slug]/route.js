import { NextResponse } from "next/server";
import { request } from "graphql-request";

export async function GET(req, res) {
  const slug = req.url.split("Projects/")[1];

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

  return NextResponse.json({ project });
}

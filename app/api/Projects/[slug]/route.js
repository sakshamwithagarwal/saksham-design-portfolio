import { NextResponse } from "next/server";
import { request } from "graphql-request";
// import { getSingleProject } from "@/lib/projects";

export async function GET(req, { params }) {
  try {
    const projectQuery = {
      PROJECT_QUERY: `
              {
                project(where: {slug: "${params.slug}"}) {
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

    return NextResponse.json(project);
  } catch (error) {
    throw new Error(`Failed to fetch project: ${params.slug}`);
  }
}

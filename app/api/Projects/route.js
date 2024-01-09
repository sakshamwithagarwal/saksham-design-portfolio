import { NextResponse } from "next/server";
import { request } from "graphql-request";

export async function GET() {
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

  return NextResponse.json({ projects });
}

import { NextResponse } from "next/server";
import { request } from "graphql-request";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { projects } = await request(
      "https://ap-south-1.cdn.hygraph.com/content/clha5gtcw11sx01taepog266q/master",
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
    
    return NextResponse.json(projects);
  } catch (err) {
    throw new Error("Failed to fetch all projects.");
  }
}
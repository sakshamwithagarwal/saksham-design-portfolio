import { NextResponse } from "next/server";
import { request } from "graphql-request";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { projects } = await request(
      "https://ap-south-1.cdn.hygraph.com/content/clha5gtcw11sx01taepog266q/master",
      `
      query Projects {
        projects(where: {priority_lte: 4}) {
          id
          projectName
          projectDescription
          projectThumbnail {
            url
            height
            width
          }
          tags
          slug
          priority
        }
      }
        `
    );

    return NextResponse.json(projects);
  } catch (err) {
    throw new Error("Failed to fetch more projects in server.");
  }
}

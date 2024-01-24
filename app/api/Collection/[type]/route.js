import { NextResponse } from "next/server";
import { request } from "graphql-request";

export const dynamic = 'force-dynamic';

export async function GET(req, { params }) {
  try {
    const collectionQuery = {
      COLLECTION_QUERY: `
            {
              collections(where: {collectionType: ${params.type}}) {
                collectionType
                imageDescription
                id
                collectionImages(first: 500) {
                  size
                  fileName
                  height
                  width
                  url
                  id
                }
              }
            }
          `,
      endPointURL:
        "https://ap-south-1.cdn.hygraph.com/content/clha5gtcw11sx01taepog266q/master",
    };

    const collection = await request(
      collectionQuery.endPointURL,
      collectionQuery.COLLECTION_QUERY
    );

    return NextResponse.json(collection);
  } catch (error) {
    throw new Error(`Failed to fetch collection of ${params.type}`);
  }
}

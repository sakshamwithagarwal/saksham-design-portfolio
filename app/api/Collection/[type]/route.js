import { NextResponse } from "next/server";
// import { getCollection } from "@/lib/collections";
import { request } from "graphql-request";

export async function GET(req, { params }) {
  try {
    const collectionQuery = {
      COLLECTION_QUERY: `
            {
              collections(where: {collectionType: ${params.type}}) {
                collectionType
                imageDescription
                id
                image {
                  fileName
                  height
                  width
                  url
                  size
                }
              }
            }
          `,
      endPointURL:
        "https://api-ap-south-1.hygraph.com/v2/clha5gtcw11sx01taepog266q/master",
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

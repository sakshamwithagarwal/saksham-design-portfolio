import { NextResponse } from "next/server";
import { request } from "graphql-request";

export const dynamic = 'force-dynamic';

export async function GET(req, { params }) {
  try {
    const collectionType = params.type;
    console.log(`Fetching collection of type: ${collectionType}`);
    
    const endPointURL = "https://ap-south-1.cdn.hygraph.com/content/clha5gtcw11sx01taepog266q/master";
    
    // First, fetch all collections to see what exists
    const allCollectionsQuery = `
      {
        collections {
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
    `;
    
    console.log(`Fetching all collections to check available types...`);
    const allData = await request(endPointURL, allCollectionsQuery);
    
    const availableTypes = allData.collections?.map(c => c.collectionType) || [];
    console.log(`Available collection types in database:`, availableTypes);
    
    // Filter by case-insensitive match
    const filteredCollections = allData.collections?.filter(c => 
      c.collectionType?.toLowerCase() === collectionType.toLowerCase()
    ) || [];
    
    console.log(`Found ${filteredCollections.length} collections for type "${collectionType}"`);
    
    const result = {
      collections: filteredCollections
    };
    
    console.log(`Collection response:`, JSON.stringify(result, null, 2));

    return NextResponse.json(result);
  } catch (error) {
    console.error(`Failed to fetch collection of ${params?.type}:`, error);
    console.error(`Error stack:`, error.stack);
    return NextResponse.json(
      { 
        collections: [],
        error: `Failed to fetch collection of ${params?.type}`, 
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 200 } // Return 200 with empty array instead of 500
    );
  }
}

import ExpandedCollection from "./ExpandedCollection";
import { dynamicBlurDataUrl } from "@/lib/dynamicBlurDataUrl";
import { getApiUrl } from "@/lib/getApiUrl";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

const getCollection = async (params) => {
  const baseUrl = await getApiUrl();
  const url = `${baseUrl}/api/Collection/${params.type}`;
  console.log(`Fetching collection from: ${url}`);

  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`API Error (${response.status}):`, errorText);
    throw new Error(`Error while fetching collection of type: ${params.type}. Status: ${response.status}`);
  }

  const data = await response.json();
  console.log(`Collection data received:`, data);
  return data;
};

// const getResources = async (data) => {
//   const resources = await Promise.all(
//     data.map(async(photo) => ({
//       ...photo,
//       blurHash: await dynamicBlurDataUrl(photo.url),
//     }))
//   );

//   return resources;
// };

const Page = async ({ params }) => {
  const collectionType = params.type;

  const collection_type = () => {
    switch (collectionType) {
      case "Renders":
        return {
          title: "3D Renders",
          subtitle:
            "Masterful 3D renders revealing the product design & rendering skills.",
        };
      case "Posters":
        return {
          title: "Posters",
          subtitle:
            "Engaging layouts that captivate and communicate at a glance.",
        };
      case "Photos":
        return {
          title: "Photographs",
          subtitle: "Captivating photography capturing the essence of design.",
        };
      case "Sketches":
        return {
          title: "Sketches",
          subtitle: "Dynamic sketches showcasing product design potential.",
        };
      default:
        return null;
    }
  };
  const collectionTypeInfo = collection_type();

  // If collection type is invalid, show 404
  if (!collectionTypeInfo) {
    notFound();
  }

  try {
    const response = await getCollection(params);

    // Ensure collections is an array
    const collections = response?.collections || [];

    // If no collections found and it's a valid type, still show the page (might be empty)
    // But if it's an API error (404), show not found
    if (response?.error && response.error.includes("Failed to fetch")) {
      notFound();
    }

    return (
      <ExpandedCollection
        collection={collections}
        type={collectionTypeInfo}
      />
    );
  } catch (error) {
    console.error(`Error in collection page for type ${collectionType}:`, error);
    // If fetch failed completely, show 404
    notFound();
  }
};

export default Page;

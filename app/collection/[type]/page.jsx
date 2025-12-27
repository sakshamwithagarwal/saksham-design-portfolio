import ExpandedCollection from "./ExpandedCollection";
import { dynamicBlurDataUrl } from "@/lib/dynamicBlurDataUrl";
import { getApiUrl } from "@/lib/getApiUrl";

export const dynamic = 'force-dynamic';

const getCollection = async (params) => {
  const url = `${getApiUrl()}/api/Collection/${params.type}`;
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
        return "";
    }
  };
  const collectionTypeInfo = collection_type();

  try {
    const response = await getCollection(params);

    // Ensure collections is an array
    const collections = response?.collections || [];

    if (collections.length === 0) {
      console.warn(`No collections found for type: ${collectionType}`);
    }

    return (
      <ExpandedCollection
        collection={collections}
        type={collectionTypeInfo}
      />
    );
  } catch (error) {
    console.error(`Error in collection page for type ${collectionType}:`, error);
    // Return empty collection on error
    return (
      <ExpandedCollection
        collection={[]}
        type={collectionTypeInfo}
      />
    );
  }
};

export default Page;

import request from "graphql-request";
import ExpandedCollection from "./ExpandedCollection";
import { baseUrl } from "@/app/page";

const getCollection = async (params) => {
  const response = await fetch(`${baseUrl}/api/Collection/${params.type}`);

  if (!response.ok) {
    throw new Error("Error while fetching All projects.");
  }
  

  return response.json();
};

const Page = async (params) => {
  const collection_type = () => {
    switch (params.params.type) {
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
  const collectionType = collection_type();
  const response = await getCollection(params.params);

  return (
    <ExpandedCollection
      collection={response.collection.collections}
      type={collectionType}
    />
  );
};

export default Page;

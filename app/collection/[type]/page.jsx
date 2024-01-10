import ExpandedCollection from "./ExpandedCollection";

const getCollection = async (params) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/collection/${params.type}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error(`Error while fetching collection of type: ${params.type}.`);
  }

  return response.json();
};

const Page = async ({ params }) => {
  const collection_type = () => {
    switch (params.type) {
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
  const response = await getCollection(params);

  return (
    <ExpandedCollection
      collection={response.collections}
      type={collectionType}
    />
  );
};

export default Page;

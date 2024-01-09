import request from "graphql-request";
import ExpandedCollection from "./ExpandedCollection";
import CollectionGallery from "./CollectionGallery";

const getCollection = async (params) => {
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

  // console.log(collection);

  return collection;
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
  const collection = await getCollection(params.params);
  console.log(collection.collections);

  // return <CollectionGallery collection={collection.collections} />;
  return <ExpandedCollection collection={collection.collections} type={collectionType} />;
};

export default Page;

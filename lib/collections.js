import { request } from "graphql-request";

export const getCollection = async (type) => {
  const collectionQuery = {
    COLLECTION_QUERY: `
            {
              collections(where: {collectionType: ${type}}) {
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

  const  collection  = await request(
    collectionQuery.endPointURL,
    collectionQuery.COLLECTION_QUERY
  );
  return collection;
};

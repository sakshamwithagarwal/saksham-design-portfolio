"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./collection_page.css";
import { motion as m } from "framer-motion";
import { portfolioFont } from "@/utils/fonts";
import CollectionGallery from "./CollectionGallery";
import NoItem from "@/components/NoChildren/NoItem";

const ExpandedCollection = ({ collection, type }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImgId, setCurrentImgId] = useState("-");
  const [currImageIdx, setCurrImageIdx] = useState(-1);
  const [numColumns, setNumColumns] = useState(0);
  const collectionArr = collection.flatMap((collection_single) =>
    collection_single.collectionImages.map((image) => ({
      ...image,
      imageDescription: collection_single.imageDescription,
    }))
  );

  const handleGalleryClick = (obj) => {
    setCurrentImgId(obj.id);

    setCurrImageIdx(
      collectionArr.findIndex((item) => {
        return item.id === obj.id;
      })
    );
    setGalleryOpen(true);
  };

  const variants = {
    header: {
      hidden: { opacity: 0, y: 48 },
      visible: { opacity: 1, y: 0 },
    },
    image: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
  };

  //collections grid
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setNumColumns(2);
      } else if (window.innerWidth <= 768) {
        setNumColumns(3);
      } else {
        setNumColumns(4);
      }
    };
    // Initial setup
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const createImageElement = (item) => {
    return (
      <m.div
        variants={variants.image}
        transition={{ duration: 0.3 }}
        key={item.id}
        className="collection__image"
        onClick={() => handleGalleryClick(item)}
      >
        <Image
          alt="Collection of Work"
          src={item.url}
          className="image"
          layout="fill"
          objectFit="cover"
        />
      </m.div>
    );
  };

  const createImageColumn = (columnImages) => {
    return (
      <div className="column">
        {columnImages.map((item, idx) => createImageElement(item))}
      </div>
    );
  };

  const createImageGrid = (images) => {
    const grid = [];

    for (let i = 0; i < numColumns; i++) {
      const columnImages = images.filter(
        (image, index) => index % numColumns === i
      );
      const columnElement = createImageColumn(columnImages);
      grid.push(columnElement);
    }

    return grid;
  };

  return (
    <m.div
      className="collection"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <m.div
        variants={variants.header}
        transition={{ duration: 0.3 }}
        className={`collection__title custom_header ${portfolioFont.className}`}
      >
        <m.h1>{type.title}.</m.h1>
        <m.h3>{type.subtitle}</m.h3>
      </m.div>

      {!galleryOpen ? (
        collection.length ? (
          <m.div
            className="collection__grid"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* {collection.map((item, idx) => (
              <div
                style={{
                  height: "fit-content",
                  border: "1px solid",
                  width: "25%",
                }}
              >
                <m.div
                  variants={variants.image}
                  transition={{ duration: 0.3 }}
                  key={idx}
                  className="collection__image"
                  onClick={() => handleGalleryClick(item)}
                  style={{ border: "1px solid red" }}
                >
                  <Image
                    alt="Collection of Work"
                    src={item.image.url}
                    className="image"
                    layout="fill"
                    objectFit="cover"
                    style={{
                      aspectRatio: `${item.image.width / item.image.height}`,
                    }}
                  />
                </m.div>
              </div>
            ))} */}
            {collectionArr ? createImageGrid(collectionArr): ''}
          </m.div>
        ) : (
          <div className="no__content">
            <NoItem item={type.title} />
            {/* <script src="https://cdn.lordicon.com/lordicon.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/krenhavm.json"
              trigger="in"
              delay="100"
              stroke="medium"
              state="in-reveal"
              colors="primary:#83878d,secondary:#f15412"
              style={{ width: "150px", height: "150px" }}
        ></lord-icon>*/}
          </div>
        )
      ) : (
        <></>
      )}

      <CollectionGallery
        open={galleryOpen}
        close={() => setGalleryOpen(false)}
        collection={collectionArr ? collectionArr : []}
        currentImgId={currentImgId}
        currImageIdx={currImageIdx}
        setCurrentImgId={setCurrentImgId}
        setCurrImageIdx={setCurrImageIdx}
      />
    </m.div>
  );
};

export default ExpandedCollection;

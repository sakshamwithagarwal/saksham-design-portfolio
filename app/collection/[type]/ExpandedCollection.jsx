"use client";
import { useState } from "react";
import Image from "next/image";
import "./collection_page.css";
import { motion as m } from "framer-motion";
import { portfolioFont } from "@/utils/fonts";
import CollectionGallery from "./CollectionGallery";
import NoItem from "@/components/NoChildren/NoItem";

const ExpandedCollection = ({ collection, type }) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImgId, setCurrentImgId] = useState("-");
  const [currImageIdx, setCurrImageIdx] = useState(-1);

  const handleGalleryClick = (obj) => {
    setCurrentImgId(obj.id);

    setCurrImageIdx(
      collection.findIndex((item) => {
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
            {collection.map((item, idx) => (
              <m.div
                variants={variants.image}
                transition={{ duration: 0.3 }}
                key={idx}
                className="collection__image"
                onClick={() => handleGalleryClick(item)}
              >
                <Image
                  alt="Collection of Work"
                  src={item.image.url}
                  className="image"
                  layout="fill"
                  objectFit="cover"
                />
              </m.div>
            ))}
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
        collection={collection}
        currentImgId={currentImgId}
        currImageIdx={currImageIdx}
        setCurrentImgId={setCurrentImgId}
        setCurrImageIdx={setCurrImageIdx}
      />
    </m.div>
  );
};

export default ExpandedCollection;

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./collection_page.css";
import { portfolioFont } from "@/utils/fonts";
import CollectionGallery from "./CollectionGallery";

const ExpandedCollection = ({ collection, type }) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImgId, setCurrentImgId] = useState("-");
  const [currImageIdx, setCurrImageIdx] = useState(-1);

  const handleGalleryClick = (obj) => {
    // updateId(obj)
    // updateIdx()
    setCurrentImgId(obj.id);

    setCurrImageIdx(
      collection.findIndex((item) => {
        return item.id === obj.id;
      })
    );
    setGalleryOpen(true);
  };

  return (
    <div className="collection">
      <div
        className={`collection__title custom_header ${portfolioFont.className}`}
      >
        <h1>{type.title}.</h1>
        <h3>{type.subtitle}</h3>
      </div>

      {!galleryOpen ? (
        collection.length ? (
          <div className="collection__grid">
            {collection.map((item, idx) => (
              <div
                key={idx}
                className="collection__image"
                onClick={() => handleGalleryClick(item)}
              >
                <Image
                  src={item.image.url}
                  className="image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="no__content">
            {/* <script src="https://cdn.lordicon.com/lordicon.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/krenhavm.json"
              trigger="in"
              delay="100"
              stroke="medium"
              state="in-reveal"
              colors="primary:#83878d,secondary:#f15412"
              style={{ width: "150px", height: "150px" }}
            ></lord-icon>
            <div>No {type.title}</div> */}
          </div>
        )
      ) : (
        <></>
      )}

      {galleryOpen ? (
        <CollectionGallery
          collection={collection}
          currentImgId={currentImgId}
          currImageIdx={currImageIdx}
          setCurrentImgId={setCurrentImgId}
          setGalleryOpen={setGalleryOpen}
          setCurrImageIdx={setCurrImageIdx}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ExpandedCollection;

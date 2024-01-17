"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import Image from "next/image";
import { portfolioFont } from "@/utils/fonts";
import { motion as m } from "framer-motion";
import { BrowserView, isDesktop } from "react-device-detect";

const CollectionGallery = ({
  open,
  close,
  collection,
  currImageIdx,
  setCurrentImgId,
  setCurrImageIdx,
}) => {
  const length = collection.length;
  const [infoOpen, setInfoOpen] = useState(false);
  const [key, setKey] = useState(null);

  // DETECT TOUCH 📱 - start
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) updateImage.nextImg();
    if (isRightSwipe) updateImage.prevImg();
  };
  // DETECT TOUCH 📱 - end

  const updateImage = {
    prevImg: () => {
      setCurrImageIdx(currImageIdx == 0 ? length - 1 : currImageIdx - 1);
      setCurrentImgId(
        collection[currImageIdx == 0 ? length - 1 : currImageIdx - 1].id
      );
    },
    nextImg: () => {
      setCurrImageIdx(currImageIdx == length - 1 ? 0 : currImageIdx + 1);
      setCurrentImgId(
        collection[currImageIdx == length - 1 ? 0 : currImageIdx + 1].id
      );
    },
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      console.log('key down');
      const key = e.key;
      if (key === "ArrowLeft") {
        updateImage.prevImg();
      } else if (key === "ArrowRight") {
        updateImage.nextImg();
      } else if (key === "i") {
        setInfoOpen(!infoOpen);
      } else if (key === "Escape") {
        setInfoOpen(false);
        close();
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currImageIdx, infoOpen, open]);
  

  const variants = {
    infoPannel: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    head: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    image: {},
  };

  return open ? (
    <m.div
      className={`collection__gallery ${portfolioFont.className}`}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onTouchMove={onTouchMove}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      // tabIndex={1}
      // onKeyDown={(e) => handleKeyPress(e)}
    >
      <div className="topbar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 41 28"
          fill="none"
          className="back-icon icon"
          onClick={close}
        >
          <path
            d="M39 15.815C40.0024 15.815 40.815 15.0024 40.815 14C40.815 12.9976 40.0024 12.185 39 12.185V15.815ZM0.716602 12.7166C0.00780106 13.4254 0.00780106 14.5746 0.716602 15.2834L12.2672 26.834C12.976 27.5428 14.1252 27.5428 14.834 26.834C15.5428 26.1252 15.5428 24.976 14.834 24.2672L4.5668 14L14.834 3.73281C15.5428 3.02401 15.5428 1.87481 14.834 1.16601C14.1252 0.45721 12.976 0.45721 12.2672 1.16601L0.716602 12.7166ZM39 12.185L2 12.185V15.815L39 15.815V12.185Z"
            fill="var(--text-main)"
          />
        </svg>

        <BrowserView>
          {!infoOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 38 38"
              fill="none"
              className="info-icon icon"
              onClick={() => setInfoOpen(true)}
            >
              <path
                d="M17.258 12.852C16.3589 11.9863 16.3589 10.5341 17.258 9.66835C18.1571 8.80261 19.6653 8.80261 20.5644 9.66835C21.4635 10.5341 21.4635 11.9863 20.5644 12.852C19.6653 13.7178 18.1571 13.7178 17.258 12.852ZM17.113 29.3849V15.3096H20.7094V29.3849H17.113Z"
                fill="var(--text-main)"
              />
              <circle
                cx="19"
                cy="19"
                r="17"
                stroke="var(--text-main)"
                strokeWidth="4"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
              className="cross-icon icon"
              onClick={() => setInfoOpen(false)}
            >
              <path
                d="M2 2L28 28"
                stroke="var(--text-main)"
                strokeWidth="3.63"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 2L2 28"
                stroke="var(--text-main)"
                strokeWidth="3.63"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </BrowserView>
      </div>

      <div className="carousel__wrapper">
        <div className="carousel__container">
          <div className="prev-icon" onClick={updateImage.prevImg}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="91"
              viewBox="0 0 52 91"
              fill="none"
            >
              <g clipPath="url(#clip0_1609_3191)">
                <path
                  d="M24.3025 82.8218L28.5999 82.8218C35.9538 82.8218 39.6308 82.8218 41.9153 80.5372C44.1999 78.2526 44.1999 74.5757 44.1999 67.2218L44.1999 23.7777C44.1999 16.4237 44.1999 12.7468 41.9153 10.4622C39.6307 8.17766 35.9538 8.17766 28.5999 8.17766L24.3025 8.17766C16.9486 8.17766 13.2717 8.17766 10.9871 10.4622C8.70252 12.7468 8.70252 16.4237 8.70252 23.7777L8.70253 67.2218C8.70253 74.5757 8.70253 78.2526 10.9871 80.5372C13.2717 82.8218 16.9486 82.8218 24.3025 82.8218Z"
                  fill="var(--text-darker)"
                  stroke="var(--text-darker)"
                  strokeWidth="16.3559"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  className="box"
                />
                <path
                  d="M35.0999 45.5002L20.7999 33.8002L20.7999 57.2002L35.0999 45.5002Z"
                  fill="var(--main-bg)"
                  stroke="var(--main-bg)"
                  strokeWidth="4.60009"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1609_3191">
                  <rect
                    width="51.8532"
                    height="91"
                    fill="white"
                    transform="translate(52 91) rotate(180)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <m.div className="images__wrapper">
            {currImageIdx >= 0 ? (
              <Image
                alt={"collection[currImageIdx].imageDescription"}
                src={collection[currImageIdx].image.url}
                className="image"
                width={collection[currImageIdx].image.width}
                height={collection[currImageIdx].image.height}
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
              />
            ) : (
              "hehe"
            )}
          </m.div>
          <div className="next-icon" onClick={updateImage.nextImg}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="91"
              viewBox="0 0 52 91"
              fill="none"
            >
              <g clipPath="url(#clip0_1609_3191)">
                <path
                  d="M24.3025 82.8218L28.5999 82.8218C35.9538 82.8218 39.6308 82.8218 41.9153 80.5372C44.1999 78.2526 44.1999 74.5757 44.1999 67.2218L44.1999 23.7777C44.1999 16.4237 44.1999 12.7468 41.9153 10.4622C39.6307 8.17766 35.9538 8.17766 28.5999 8.17766L24.3025 8.17766C16.9486 8.17766 13.2717 8.17766 10.9871 10.4622C8.70252 12.7468 8.70252 16.4237 8.70252 23.7777L8.70253 67.2218C8.70253 74.5757 8.70253 78.2526 10.9871 80.5372C13.2717 82.8218 16.9486 82.8218 24.3025 82.8218Z"
                  fill="var(--text-darker)"
                  stroke="var(--text-darker)"
                  strokeWidth="16.3559"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  className="box"
                />
                <path
                  d="M35.0999 45.5002L20.7999 33.8002L20.7999 57.2002L35.0999 45.5002Z"
                  fill="var(--main-bg)"
                  stroke="var(--main-bg)"
                  strokeWidth="4.60009"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1609_3191">
                  <rect
                    width="51.8532"
                    height="91"
                    fill="white"
                    transform="translate(52 91) rotate(180)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        {!isDesktop || infoOpen ? (
          <m.div className="info__container" variants={variants.infoPannel}>
            <div className="info__inner">
              <m.div
                className="inner-head"
                variants={variants.head}
                // transition={{ delay: 0.2 }}
              >
                <div>info</div>
              </m.div>

              <m.ul
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                transition={{
                  staggerChildren: 0.2,
                  staggerDirection: 1,
                  delayChildren: 0.3,
                }}
              >
                <m.li
                  title={collection[currImageIdx].image.fileName}
                  variants={variants.head}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="30"
                    viewBox="0 0 34 30"
                    fill="none"
                  >
                    <path
                      d="M5.42112 5.04463H13.7578V24.107H5.42112C3.53316 24.107 2 22.5738 2 20.6859V8.4636C2 6.57564 3.53316 5.04248 5.42112 5.04248V5.04463Z"
                      stroke="var(--text-main)"
                      strokeWidth="2.58035"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M20.8193 5.04443H29.1603C31.0461 5.04443 32.575 6.57759 32.575 8.46985V20.6835C32.575 22.5758 31.0461 24.1089 29.1603 24.1089H20.8193"
                      stroke="var(--text-main)"
                      strokeWidth="2.58035"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M13.7578 29.1537V0"
                      stroke="var(--text-main)"
                      strokeWidth="2.58035"
                      strokeMiterlimit="10"
                    />
                  </svg>
                  <span>{collection[currImageIdx].image.fileName}</span>
                </m.li>
                <m.li variants={variants.head}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                  >
                    <path
                      d="M27.3756 2H3.39124C2.62288 2 2 2.62288 2 3.39124V27.1799C2 27.9483 2.62288 28.5712 3.39124 28.5712H27.3756C28.144 28.5712 28.7669 27.9483 28.7669 27.1799V3.39124C28.7669 2.62288 28.144 2 27.3756 2Z"
                      stroke="var(--text-main)"
                      strokeWidth="2.58035"
                      strokeMiterlimit="10"
                      stroke-dasharray="2.58 2.58"
                    />
                    <path
                      d="M2 15.0308H15.6415V28.5733H3.39339C2.62573 28.5733 2 27.9497 2 27.1799V15.0308Z"
                      fill="var(--text-main)"
                      stroke="var(--text-main)"
                      strokeWidth="2.58035"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M15.6416 15.031L21.5184 9.19727"
                      stroke="var(--text-main)"
                      strokeWidth="2.58035"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M22.4517 14.5277V6.70703"
                      stroke="var(--text-main)"
                      strokeWidth="2.58035"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M15.9707 8.07275H23.8494"
                      stroke="var(--text-main)"
                      strokeWidth="2.58035"
                      strokeMiterlimit="10"
                    />
                  </svg>
                  {collection[currImageIdx].image.width} X{" "}
                  {collection[currImageIdx].image.height}
                </m.li>
                <m.li variants={variants.head}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="30"
                    viewBox="0 0 24 30"
                    fill="none"
                  >
                    <path
                      d="M19.9569 29.1537H3.41252C1.52671 29.1537 0 27.6248 0 25.7412V3.41252C0 1.52886 1.52886 0 3.41252 0H13.0265C13.6114 0 14.1726 0.232232 14.5854 0.645088L22.7243 8.78395C23.1372 9.19681 23.3694 9.75804 23.3694 10.3429V25.739C23.3694 27.6248 21.8405 29.1515 19.9569 29.1515V29.1537ZM3.41252 2.58035C2.95235 2.58035 2.58035 2.95235 2.58035 3.41252V25.739C2.58035 26.1992 2.95235 26.5712 3.41252 26.5712H19.9569C20.417 26.5712 20.789 26.1992 20.789 25.739V10.4999L12.8695 2.58035H3.41252Z"
                      fill="var(--text-main)"
                    />
                    <path
                      d="M8.15828 7.07227H6.72188C6.40599 7.07227 6.1499 7.32835 6.1499 7.64424V11.6029C6.1499 11.9188 6.40599 12.1749 6.72188 12.1749H8.15828C8.47417 12.1749 8.73026 11.9188 8.73026 11.6029V7.64424C8.73026 7.32835 8.47417 7.07227 8.15828 7.07227Z"
                      fill="var(--text-main)"
                    />
                    <path
                      d="M12.8697 7.07227H11.4333C11.1174 7.07227 10.8613 7.32835 10.8613 7.64424V11.6029C10.8613 11.9188 11.1174 12.1749 11.4333 12.1749H12.8697C13.1856 12.1749 13.4417 11.9188 13.4417 11.6029V7.64424C13.4417 7.32835 13.1856 7.07227 12.8697 7.07227Z"
                      fill="var(--text-main)"
                    />
                  </svg>{" "}
                  {(collection[currImageIdx].image.size / 1e6).toFixed(1)} MB
                </m.li>
              </m.ul>
            </div>
            <div className="info__inner">
              <m.div
                className="inner-head"
                variants={variants.head}
                transition={{ delay: 0.2 }}
              >
                <div>description</div>
              </m.div>
              <m.ul
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                transition={{ staggerChildren: 0.3, delay: 0.2 }}
              >
                <m.li variants={variants.head} transition={{ delay: 0.3 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="24"
                    viewBox="0 0 32 24"
                    fill="none"
                  >
                    <path
                      d="M2 2H30"
                      stroke="var(--text-main)"
                      strokeWidth="2.58"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2 12H30"
                      stroke="var(--text-main)"
                      strokeWidth="2.58"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2 22H20"
                      stroke="var(--text-main)"
                      strokeWidth="2.58"
                      strokeLinecap="round"
                    />
                  </svg>
                  {collection[currImageIdx].imageDescription ? (
                    collection[currImageIdx].imageDescription
                  ) : (
                    <div style={{ opacity: 0.5 }}>No Description</div>
                  )}
                </m.li>
              </m.ul>
            </div>
          </m.div>
        ) : (
          <></>
        )}
      </div>
    </m.div>
  ) : (
    ""
  );
};

export default CollectionGallery;

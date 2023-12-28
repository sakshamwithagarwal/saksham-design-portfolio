'use client'
import React, { useRef, useState } from "react";
import "./collection.css";
import { motion } from "framer-motion";
import collectionData from '@/constants/PostersList.json'
import { useRouter } from "next/router";
import { portfolioFont } from "@/utils/fonts";

const Collection = ({ projects, isOpen, setIsOpen }) => {
  const [thumbnail, setThumbnail] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const listRef = useRef(null);

  const variants = {
    hidden: {
      opacity: 0,
      transition: { mass: 0.1, transitionEnd: { y: -48 }, type: "spring" },
      y: -96,
    },
    visible: {
      opacity: 1,
      transition: { mass: 0.1, restDelta: 0.00001, type: "spring" },
      y: 0,
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      transition: {
        striffness: 300,
        damping: 24,
        transitionEnd: { y: -48 },
        type: "spring",
      },
      y: -96,
    },
    visible: {
      opacity: 1,
      transition: { mass: 0.1, restDelta: 0.00001, type: "spring" },
      y: 0,
    },
  };
  const parentVariants = {
    hidden: { transition: { staggerChildren: 0.05, staggerDirection: 1 } },
    visible: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };
  const thumbnailVariants = {
    selected: {
      opacity: 1,
      transition: {
        bounce: 0.1,
        duration: 0.8,
        restDelta: 0.00001,
        type: "spring",
      },
    },
    unselected: {
      opacity: 0,
      transition: {
        bounce: 0.1,
        duration: 0.8,
        restDelta: 0.00001,
        type: "spring",
      },
    },
  };
  const thumbnailIMGVariants = {
    selected: {
      scale: 1.1,
      transition: {
        bounce: 0.1,
        duration: 0.8,
        restDelta: 0.00001,
        type: "spring",
      },
    },
    unselected: {
      scale: 1,
      transition: {
        bounce: 0.1,
        duration: 0.8,
        restDelta: 0.00001,
        type: "spring",
      },
    },
  };
  const handleTouchStart = () => {
    setIsTouched(true);
  };

  const handleTouchEnd = () => {
    setIsTouched(false);
  };

  const handleMouseEnter = (thumb) => {
    setThumbnail(thumb);
  };
  const handleMouseLeave = () => {
    setThumbnail("");
  };

  // (function (timer) {
  //   if(typeof window !== undefined) {
  //     window.addEventListener("load", function () {
  //       var el = document.querySelector(".collection__list");
  //       el.addEventListener("scroll", function (e) {
  //         (function (el) {
  //           el.classList.add("scroll");
  //           clearTimeout(timer);
  //           timer = setTimeout(function () {
  //             el.classList.remove("scroll");
  //           }, 100);
  //         })(el);
  //       });
  //     });
  //   }
  // })();

  return (
    <motion.div
      className="collection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, delay: 0.5, ease: "easeOut" }}
      end={{opacity: 0}}
    >
      {/* <SimpleNav isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      {/* <Navbar /> */}

      {isOpen ? (
        ""
      ) : (
        <motion.div
          className="collection__container"
          variants={parentVariants}
          animate={"visible"}
          initial={"hidden"}
          exit={"hidden"}
        >
          <motion.div className="collection__thumbnail" variants={variants}>
            <motion.div
              className="collection__thumbnail-inside"
              variants={thumbnailVariants}
              animate={thumbnail == "" ? "unselected" : "selected"}
              initial={"unselected"}
            >
              <motion.img
                src={"/" + thumbnail}
                alt=""
                variants={thumbnailIMGVariants}
              />
            </motion.div>
          </motion.div>

          <motion.div className="collection__list-wrapper">
            <motion.h3 className={`collection__list-title ${portfolioFont.className}`} variants={variants}>
              Posters
            </motion.h3>
            <motion.div className="collection__list-outer">
              {collectionData && (
                <motion.ul className="collection__list" ref={listRef}>
                  {collectionData.posters.map((item, key) => (
                    <motion.li
                      className={
                        isTouched
                          ? "collection__list-item touched"
                          : "collection__list-item"
                      }
                      variants={itemVariants}
                      key={key + "-" + item.title}
                      onMouseEnter={() => handleMouseEnter(item.thumbnail)}
                      onMouseLeave={() => handleMouseLeave()}
                    >
                      <motion.div
                        style={
                          item.diffFont ? { fontFamily: item.fontFamily } : {}
                        }
                        className="hoverable"
                      >
                        {item.title}
                      </motion.div>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Collection;

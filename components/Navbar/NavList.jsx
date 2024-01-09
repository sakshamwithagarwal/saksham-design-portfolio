import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ListIconComp from "./ListIconComp";
import { listItem } from "@/constants/nav";
import { portfolioFont } from "@/utils/fonts";

const NavList = ({ toggle }) => {
  const navListVariants = {
    close: {
      opacity: 0.5,
      transition: {
        bounce: 0.1,
        duration: 2,
        restDelta: 0.00001,
        type: "spring",
      },
      transitionEnd: { display: "none" },
      // y: -50,
    },
    open: {
      display: "",
      opacity: 1,
      // y: 0,
      transition: { delayChildren: 0.3, staggerChildren: 0.05 },
    },
  };

  // const itemVariants = {
  //   open: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { type: "spring", stiffness: 300, damping: 24, delay: 0.5 },
  //   },
  //   closed: { opacity: 0, y: -100, transition: { duration: 0.2 } },
  // };

  const itemVariants = {
    close: {
      // opacity: 0,
      transition: {
        stiffness: 300,
        damping: 24,
        type: "spring",
      },
      y: -100,
      transition: {
        duration: 1,
      },
    },
    open: {
      // opacity: 1,
      // transition: { mass: 0.5, restDelta: 0.5, type: "spring" },
      y: 0,
    },
  };

  return (
    <motion.div
      className={`nav__list active ${portfolioFont.className}`}
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      exit={{ opacity: 0 }}
    >
      <motion.ul
        initial="close"
        animate="open"
        exit="close"
        transition={{ duration: 0.5 }}
        variants={navListVariants}
      >
        {listItem.map((item) => {
          return (
            <li key={item.title}>
              <motion.div
                className="listitem-inner"
                variants={itemVariants}
                // style={{ border: "1px solid blue" }}
                // transition={{ duration: 0.5 }}
              >
                <Link href={item.url} onClick={toggle}>
                  <ListIconComp className="icon" /> {item.title}
                </Link>
                {/* <ul className="nav__sublist">
                  {item.sublist.map((subItem) => (
                    <motion.li
                      variants={itemVariants}
                      className="nav__list-sub-item"
                      key={subItem.title}
                      onClick={toggle}
                    >
                      <Link href={subItem.url}>
                        <ListIconComp className="icon" /> {subItem.title}
                      </Link>
                    </motion.li>
                  ))}
                </ul> */}
              </motion.div>
            </li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default NavList;

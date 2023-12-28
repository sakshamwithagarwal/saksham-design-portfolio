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
        duration: 0.8,
        restDelta: 0.00001,
        type: "spring",
      },
      transitionEnd: { display: "none" },
      y: -100,
    },
    open: {
      display: "",
      opacity: 1,
      y: 0,
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
      opacity: 0,
      transition: {
        striffness: 300,
        damping: 24,
        type: "spring",
      },
      y: -96,
    },
    open: {
      opacity: 1,
      transition: { mass: 0.1, restDelta: 0.00001, type: "spring" },
      y: 0,
    },
  };
  return (
    <motion.div className={`nav__list active ${portfolioFont.className}`}>
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
              {item.sublist.length >= 1 ? (
                <motion.div className="listitem-inner" variants={itemVariants}>
                  <ListIconComp className="icon" /> {item.title}
                  <ul className="nav__sublist">
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
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  className="listitem-inner"
                  onClick={toggle}
                  variants={itemVariants}
                >
                  <Link href={item.url}>
                    <ListIconComp className="icon" /> {item.title}
                  </Link>
                </motion.div>
              )}
            </li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default NavList;

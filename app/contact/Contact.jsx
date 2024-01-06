"use client";
import React from "react";
import ListIconComp from "./ListIconComp";
import Link from "next/link";
import Image from "next/image";
import picture from "./contact.jpg";
import { motion as m } from "framer-motion";
import { portfolioFont } from "@/utils/fonts";
import Spotify from "@/components/Spotify/Spotify";

const ContactCL = ({ albumArt, songURL }) => {
  const itemVariants = {
    hidden: {
      opacity: 0,
      transition: {
        striffness: 300,
        damping: 24,
        transitionEnd: { y: 75 },
        type: "spring",
      },
      y: 150,
    },
    visible: {
      opacity: 1,
      transition: { mass: 0.1, restDelta: 0.00001, type: "spring", delay: 0.5 },
      y: 0,
    },
  };
  const listVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 1 },
    },
  };
  return (
    <m.div
      className={`contact ${portfolioFont.className}`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.25, delay: 0.25, ease: "easeOut" }}
    >
      <div className="contact__wrapper">
        <div className="contact__wrapper-inner">
          <div className="contact__intro">
            <m.h1
              initial={{ y: 150 }}
              animate={{ y: 0 }}
              exit={{ y: 150 }}
              transition={{ duration: 0.25, delay: 0.25, ease: "easeOut" }}
            >
              Hello.
            </m.h1>
            <m.p
              initial={{ y: 150 }}
              animate={{ y: 0 }}
              exit={{ y: 150 }}
              transition={{ duration: 0.25, delay: 0.35, ease: "easeOut" }}
            >
              I&apos;d Love to hear from you.
            </m.p>
          </div>
          <div className="contact__socials">
            <m.h2
              initial={{ y: 150 }}
              animate={{ y: 0 }}
              exit={{ y: 150 }}
              transition={{ duration: 0.25, delay: 0.45, ease: "easeOut" }}
            >
              Visit me at
            </m.h2>
            <m.ul
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <m.li variants={itemVariants}>
                <Link href={"https://www.behance.net/sakshamwithagarwal"}>
                  <ListIconComp className="icon" /> Behance
                </Link>
              </m.li>
              <m.li variants={itemVariants}>
                <Link href={"https://www.instagram.com/sakshamwithagarwal"}>
                  <ListIconComp className="icon" /> Instagram
                </Link>
              </m.li>
              <m.li variants={itemVariants}>
                <Link
                  href={
                    "https://www.linkedin.com/in/saksham-parag-agarwal-b063711b3"
                  }
                >
                  <ListIconComp className="icon" /> LinkedIn
                </Link>
              </m.li>
              <m.li variants={itemVariants}>
                <Link href={"mailto:sakshamwithagarwal@gmail.com"}>
                  <ListIconComp className="icon" /> Mail
                </Link>
              </m.li>
            </m.ul>
          </div>
        </div>

        <div className="contact_picture__wrapper">
          <Spotify albumArt={albumArt} songURL={songURL} />
          <Image src={picture} className="contact_picture" />
        </div>
      </div>
    </m.div>
  );
};

export default ContactCL;

'use client'
import picture from "./about_me.png";
import { ToolCard } from "@/components";
import { tools_list } from "@/constants/tools";
import { motion as m } from "framer-motion";
import Spotify from "@/components/Spotify/Spotify";
import { open_sans, portfolioFont } from "@/utils/fonts";
import Link from "next/link";
import Image from "next/image";

const AboutCL = ({songURL, albumArt}) => {
  return (
    <m.div
      className={`about ${portfolioFont.className}`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.25, delay: 0.25, ease: "easeOut" }}
    >
      <div className="about___content-wrapper">
        <div className="about__content">
          <div className="about__header custom_header">
            <m.h1
              initial={{ y: 150 }}
              animate={{ y: 0 }}
              exit={{ y: 150 }}
              transition={{ duration: 0.25, delay: 0.25, ease: "easeOut" }}
            >
              Saksham.
            </m.h1>
            <m.h3
              initial={{ y: 150 }}
              animate={{ y: 0 }}
              exit={{ y: 150 }}
              transition={{ duration: 0.25, delay: 0.35, ease: "easeOut" }}
            >
              B.Des. | Product & Packaging Designer
            </m.h3>
          </div>
          <m.div
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            exit={{ y: 150 }}
            transition={{ duration: 0.25, delay: 0.45, ease: "easeOut" }}
            className="section_title"
          >
            <h3>About</h3>
          </m.div>
          <m.p
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            exit={{ y: 150 }}
            transition={{ duration: 0.25, delay: 0.45, ease: "easeOut" }}
            className={open_sans.className}
          >
            Hey, my name is <span>Saksham Parag Agarwal</span>. I&apos;m 21 and
            I am a <span>Product & Packaging Designer</span>. I create designs
            that are both sustainable and universal. Supporter for right to
            repair & sustainability, my goal is to infuse a more eco-conscious
            approach into design.
          </m.p>
          <m.p
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            exit={{ y: 150 }}
            transition={{ duration: 0.25, delay: 0.45, ease: "easeOut" }}
            className={open_sans.className}
          >
            I draw inspiration from music and comics. The intersection of music
            and comics serves as a catalyst for creating captivating designs
            that aim to make a positive impact on the design world.
          </m.p>
          <Link href={"/"} className="resume-btn">
            <m.span
              initial={{ y: 550 }}
              animate={{ y: 0 }}
              exit={{ y: 550 }}
              transition={{ duration: 1, delay: 5, ease: "easeOut" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                style={{ marginRight: ".5rem" }}
              >
                <path
                  d="M1 14L14 1M14 1H4.3742M14 1V10.5996"
                  stroke="var(--text-main)"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
              </svg>
              View Résumé
            </m.span>
          </Link>
        </div>
        
        <div className="about__picture-wrapper">
          <Spotify albumArt={albumArt} songURL={songURL} />

          <Image src={picture} className="about__picture" alt="Saksham's Picture" />
        </div>
      </div>
      <div className="scroll-down-btn">
        <div></div>
        <div></div>
      </div>
      <m.div
        className="tools__wrapper"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <h2>Tools</h2>
        <div className="tools__grid">
          {tools_list.map((tool, item) => (
            <ToolCard data={tool} key={item} />
          ))}
        </div>
      </m.div>
    </m.div>
  )
}

export default AboutCL
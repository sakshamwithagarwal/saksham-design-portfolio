"use client";
import { motion as m } from "framer-motion";
import Link from "next/link";
import "./footer.css";
import { portfolioFont } from "@/utils/fonts";

const Footer = () => {
  return (
    <m.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={""}
    >
      <div className="footer__main">
        <div className="footer__wrapper">
          <m.p
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            &copy;2024 Saksham Parag Agarwal
          </m.p>
          <m.p
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            All Rights Reserved
          </m.p>
          <m.p
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="mailto:sakshamparag@gmail.com">
              sakshamparag@gmail.com
            </Link>
          </m.p>
        </div>
        <div className="footer__wrapper">
          <m.p
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Designed by <Link href="/">Saksham Parag Agarwal</Link>
          </m.p>
          <m.p
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Developed by <Link href="/">Anshika Gautam</Link>
          </m.p>
        </div>
      </div>
    </m.footer>
  );
};

export default Footer;

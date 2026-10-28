"use client";
import { useState } from "react";
import { motion as m } from "framer-motion";
import Link from "next/link";
import "./footer.css";
import { portfolioFont } from "@/utils/fonts";
import ContactCard from "../ContactCard/ContactCard";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
  >
    <path
      d="M1 10.27L9.82 1.44995M9.82 1.44995H3.28927M9.82 1.44995V7.96291"
      stroke="var(--text-main)"
      strokeWidth="1.6"
      strokeMiterlimit="10"
    />
  </svg>
);

const Footer = () => {
  const [contactCardOpen, setContactCardOpen] = useState(false);

  // Opens the contact card and downloads the vCard so the contact can be saved.
  const openContactDetails = () => {
    setContactCardOpen(true);
    const a = document.createElement("a");
    a.href = "/saksham-agarwal.vcf";
    a.download = "saksham-agarwal.vcf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const linkList = [
    {
      title: "WhatsApp",
      url: "https://wa.me/919045011502?text=Hi%20Saksham%2C%20I%20saw%20your%20portfolio",
      newTab: true,
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/sakshamwithagarwal/",
    },
    {
      title: "Mail",
      url: "mailto:sakshamparag@gmail.com",
    },
  ];

  const currYear = () => {
    return new Date().getFullYear()
  }
  return (
    <m.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={portfolioFont.className}
    >
      <div className="footer__main">
        <div className="footer__wrapper">
          <div className="footer__content">
            <div className="footer-branding">
              <div className="footer-logo">saksham.</div>
              <p>
                i care about minute details <br></br> and other stuff XD.
              </p>
            </div>
            <div className="footer-cta">
              Ready to start your next project? Drop me a mail or text me on my
              socials. I am open to collaborate with creative minds.
            </div>
          </div>

          <div className="footer__links">
            <div className="links">
              <h4>Contact</h4>
              <ul>
                {linkList.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.url}
                      {...(link.newTab
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <ArrowIcon />
                      {link.title}
                    </Link>
                  </li>
                ))}
                {/* Desktop / tablet only — opens the contact card */}
                <li className="contact-details-item">
                  <button
                    type="button"
                    onClick={openContactDetails}
                    aria-haspopup="dialog"
                  >
                    <ArrowIcon />
                    Contact Details
                  </button>
                </li>
              </ul>
            </div>
            <div className="design-details">
              <div className="detail-wrapper">
                <div className="title">Site Designed By</div> <span><Link href={'/'}>Saksham Parag Agarwal</Link></span>
              </div>
              <div className="detail-wrapper">
                <div className="title">Site Developed By</div> <span><Link href={'https://www.linkedin.com/in/anshika-gautam/'}>Anshika Gautam</Link></span>
              </div>
            </div>
          </div>

          <div className="footer__legals">
            <div>
            <Link href={'terms-and-conditions'}>Terms & Conditions</Link> | <Link href={'privacy-policy'}>Privacy Policy</Link>
            </div>
            <div>
            ©{currYear()} All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
      <ContactCard
        isOpen={contactCardOpen}
        onClose={() => setContactCardOpen(false)}
      />
    </m.footer>
  );
};

export default Footer;

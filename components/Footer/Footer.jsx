"use client";
import { motion as m } from "framer-motion";
import Link from "next/link";
import "./footer.css";
import { portfolioFont } from "@/utils/fonts";

const Footer = () => {
  const linkList = [
    {
      title: "Behance",
      url: "https://www.behance.net/sakshamwithagarwal",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/sakshamwithagarwal",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/saksham-parag-agarwal-b063711b3",
    },
    {
      title: "Mail",
      url: "mailto:contact@sakshamparag.com",
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
                    <Link href={link.url}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                      >
                        <path
                          d="M1 10.27L9.82 1.44995M9.82 1.44995H3.28927M9.82 1.44995V7.96291"
                          stroke="#83878D"
                          strokeWidth="1.6"
                          strokeMiterlimit="10"
                        />
                      </svg>
                      {link.title}
                    </Link>
                  </li>
                ))}
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
    </m.footer>
  );
};

export default Footer;

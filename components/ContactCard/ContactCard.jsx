"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion as m } from "framer-motion";
import { portfolioFont } from "@/utils/fonts";
import "./contactCard.css";

const PHONE_DISPLAY = "+91 90450 11502";
const PHONE_HREF = "tel:+919045011502";
const EMAIL = "sakshamparag@gmail.com";

// The card is desktop/tablet only (hidden at the footer's mobile breakpoint).
const MOBILE_QUERY = "(max-width: 576px)";

const ContactCard = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    const mq = window.matchMedia(MOBILE_QUERY);
    const onMobile = (e) => {
      if (e.matches) onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    mq.addEventListener("change", onMobile);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
      mq.removeEventListener("change", onMobile);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <m.div
          key="contact-card-overlay"
          className="contact-card__overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={onClose}
        >
          <m.div
            className={`contact-card ${portfolioFont.className}`}
            role="dialog"
            aria-modal="true"
            aria-label="Contact details"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background grid lines (one asset per theme) */}
            <div className="contact-card__bg">
              <Image
                className="contact-card__bg-img contact-card__light"
                src="/contact-card/bg-light.svg"
                alt=""
                width={246}
                height={1761}
                unoptimized
              />
              <Image
                className="contact-card__bg-img contact-card__dark"
                src="/contact-card/bg-dark.svg"
                alt=""
                width={246}
                height={1761}
                unoptimized
              />
            </div>

            {/* Illustration (one asset per theme, mirrored like the design) */}
            <div className="contact-card__art">
              <Image
                className="contact-card__art-img contact-card__light"
                src="/contact-card/illustration-light.svg"
                alt=""
                width={190}
                height={170}
                unoptimized
              />
              <Image
                className="contact-card__art-img contact-card__dark"
                src="/contact-card/illustration-dark.svg"
                alt=""
                width={190}
                height={170}
                unoptimized
              />
            </div>

            <div className="contact-card__head">
              <div className="contact-card__name">
                <p className="contact-card__title">Saksham Parag Agarwal</p>
                <p className="contact-card__role">Designer @Phinullabs</p>
              </div>
              <button
                type="button"
                className="contact-card__close"
                aria-label="Close contact details"
                onClick={onClose}
                autoFocus
              >
                <span className="contact-card__close-bar contact-card__close-bar--a" />
                <span className="contact-card__close-bar contact-card__close-bar--b" />
              </button>
            </div>

            <div className="contact-card__details">
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ContactCard;

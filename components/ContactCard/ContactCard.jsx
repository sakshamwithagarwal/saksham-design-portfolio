"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  AnimatePresence,
  motion as m,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { portfolioFont } from "@/utils/fonts";
import "./contactCard.css";

const PHONE_DISPLAY = "+91 90450 11502";
const PHONE_HREF = "tel:+919045011502";
const EMAIL = "sakshamparag@gmail.com";

// The card is desktop/tablet only (hidden at the footer's mobile breakpoint).
const MOBILE_QUERY = "(max-width: 576px)";

// Hover tilt: the edge nearest the cursor tilts away from the viewer.
const TILT_MAX_DEG = 10;
const TILT_PERSPECTIVE = 1000;
const TILT_SPRING = { stiffness: 180, damping: 18, mass: 0.4 };
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const ContactCard = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, TILT_SPRING);
  const rotateY = useSpring(tiltY, TILT_SPRING);

  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const handleTilt = (e) => {
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    // cursor position from the card's centre, -1 (left/top) .. 1 (right/bottom)
    const px = (e.clientX - (rect.left + rect.width / 2)) / (el.offsetWidth / 2);
    const py = (e.clientY - (rect.top + rect.height / 2)) / (el.offsetHeight / 2);
    const clamp = (v) => Math.max(-1, Math.min(1, v));
    // +rotateY sends the right edge away, +rotateX sends the top edge away
    tiltY.set(clamp(px) * TILT_MAX_DEG);
    tiltX.set(-clamp(py) * TILT_MAX_DEG);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // start flat every time the card opens
  useEffect(() => {
    if (!isOpen) {
      tiltX.set(0);
      tiltY.set(0);
    }
  }, [isOpen, tiltX, tiltY]);

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
            style={{ rotateX, rotateY, transformPerspective: TILT_PERSPECTIVE }}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background grid lines + circle (one asset per theme) */}
            <div className="contact-card__bg">
              <Image
                className="contact-card__bg-img contact-card__light"
                src="/contact-card/bg-light.png"
                alt=""
                width={247}
                height={285}
                unoptimized
              />
              <Image
                className="contact-card__bg-img contact-card__dark"
                src="/contact-card/bg-dark.png"
                alt=""
                width={247}
                height={285}
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

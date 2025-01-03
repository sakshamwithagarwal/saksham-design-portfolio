"use client";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { portfolioFont } from "@/utils/fonts";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import NavList from "./NavList";
import "./nav.css";
import { HamburgerToggle } from "./HamburgerToggle";

const Navbar = ({ isOpen, setIsOpen }) => {
  const location = usePathname();
  // const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen();
  };
  const menuVariants = {
    menuOpen: {
      display: "flex",
      transition: {
        bounce: 0.1,
        duration: 0.8,
        restDelta: 0.00001,
        type: "spring",
      },
      y: 0,
    },
    menuClosed: {
      transitionEnd: { display: "none" },
      y: -100,
      transition: { duration: 0.5 },
    },
  };
  const logoVariants = {
    menuOpen: { opacity: 1, display: "block" },
    menuClosed: { opacity: 0, display: "none" },
  };

  // 🎨 Theme Switcher
  const { theme, setTheme } = useTheme();
  const themeRef = useRef();

  const themeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
    // themeRef.current.setAttribute("aria-label", theme);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      transition={{ duration: 0.9 }}
    >
      <ul>
        {/* LOGO */}
        <li>
          {/* <Link to={"/"} className="brand_logo logo"> */}
          <AnimatePresence>
            {location.includes("/project/", 0) ? (
              <Link href={"/"} className="brand_logo logo" key={"brand__logo"}>
                <motion.span
                  variants={logoVariants}
                  initial="menuClosed"
                  animate="menuOpen"
                  exit="menuClosed"
                  onClick={() => {
                    isOpen ? setIsOpen() : "";
                  }}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="30"
                    viewBox="0 0 37 30"
                    fill="none"
                    className={"small-logo"}
                  >
                    <path
                      d="M20.6943 5.63216L21.0064 5.34542L20.7746 4.99061C19.0147 2.29568 15.7861 0.5 12.14 0.5C9.59012 0.5 7.42953 1.2631 5.76049 2.87651C4.10774 4.47416 3.268 6.37004 3.268 8.644C3.268 10.6118 3.79038 12.145 4.78333 13.372C5.76657 14.587 7.17721 15.4593 8.87765 16.1767L8.87797 16.1768C9.32839 16.3665 9.94223 16.586 10.5483 16.8028C10.6286 16.8315 10.7087 16.8601 10.7883 16.8887C11.484 17.1381 12.1352 17.3767 12.5511 17.5724L12.5778 17.585L12.6059 17.5943C13.0555 17.7442 13.5447 17.9408 13.9772 18.1811L13.9913 18.1889L14.006 18.1959C14.441 18.402 14.7144 18.6367 14.8802 18.8784C15.0435 19.1164 15.124 19.3918 15.124 19.72C15.124 20.5573 14.8832 21.1019 14.4839 21.4483C14.0712 21.8063 13.4036 22.028 12.4 22.028C11.2851 22.028 10.3465 21.6988 9.56505 21.0563C8.77615 20.4076 8.11725 19.4143 7.6179 18.0411L7.42071 17.4989L6.91201 17.7712L1.76401 20.5272L1.36391 20.7414L1.53846 21.1603C2.35522 23.1205 3.71286 24.8523 5.5946 26.3039C7.5078 27.7798 9.80092 28.54 12.4 28.54C15.2651 28.54 17.6364 27.6707 19.4616 25.8456C21.267 24.0401 22.208 21.8866 22.208 19.304C22.208 17.3456 21.3209 15.6777 20.4809 14.7205C20.0458 14.1679 19.342 13.7145 18.4636 13.2491C18.3594 13.1905 18.2575 13.1329 18.1579 13.0766C17.4903 12.6994 16.9295 12.3826 16.5276 12.2318L16.5276 12.2317L16.5167 12.2279L14.2832 11.4488L12.4167 10.7748C10.8042 10.1695 10.248 9.4578 10.248 8.696C10.248 8.13527 10.4607 7.73042 10.7805 7.45833C11.1096 7.1783 11.586 7.012 12.14 7.012C13.6786 7.012 14.9986 7.70143 16.1163 9.1107L16.4504 9.53199L16.8463 9.16816L20.6943 5.63216ZM27.1707 20.0944C25.3115 21.9537 25.3115 25.1823 27.1707 27.0416C29.03 28.9008 32.2586 28.9008 34.1178 27.0416C35.9771 25.1823 35.9771 21.9537 34.1178 20.0944C32.2586 18.2352 29.03 18.2352 27.1707 20.0944Z"
                      stroke="var(--text-main)"
                    />
                  </motion.svg>
                </motion.span>
              </Link>
            ) : (
              <Link href={"/"} className="brand_logo logo" key={"brand__logo"}>
                <motion.span
                  variants={logoVariants}
                  initial="menuClosed"
                  animate="menuOpen"
                  exit="menuClosed"
                  onClick={() => {
                    isOpen ? setIsOpen() : "";
                  }}
                >
                  <svg
                    width="213"
                    height="38"
                    viewBox="0 0 213 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.14 10.3756C13.624 10.3756 16.692 12.0916 18.356 14.6396L14.508 18.1756C13.312 16.6676 11.856 15.8876 10.14 15.8876C8.84 15.8876 7.748 16.6676 7.748 18.0716C7.748 19.1636 8.58 19.9956 10.244 20.6196L12.116 21.2956L14.352 22.0756C14.768 22.2316 15.392 22.5956 16.224 23.0636C17.108 23.5316 17.732 23.9476 18.096 24.4156C18.876 25.2996 19.708 26.8596 19.708 28.6796C19.708 31.1236 18.824 33.1516 17.108 34.8676C15.392 36.5836 13.156 37.4156 10.4 37.4156C7.904 37.4156 5.72 36.6876 3.9 35.2836C2.08 33.8796 0.78 32.2156 0 30.3436L5.148 27.5876C6.188 30.4476 7.956 31.9036 10.4 31.9036C12.532 31.9036 13.624 30.9676 13.624 29.0956C13.624 28.2636 13.208 27.5876 12.22 27.1196C11.752 26.8596 11.232 26.6516 10.764 26.4956C9.88 26.0796 8.06 25.5076 7.072 25.0916C3.744 23.6876 1.768 21.7636 1.768 18.0196C1.768 15.8876 2.548 14.1196 4.108 12.6116C5.668 11.1036 7.696 10.3756 10.14 10.3756ZM30.2668 18.9036L24.8068 17.6556C25.6388 13.2876 29.5388 10.3756 34.7908 10.3756C42.1228 10.3756 45.8148 14.0156 45.8148 21.3476V36.9996H40.5108L39.8348 33.6716C37.8068 36.1676 35.1028 37.4156 31.7748 37.4156C27.1468 37.4156 23.8188 34.5036 23.8188 29.4596C23.8188 24.2596 28.3428 20.8796 34.9988 20.8796H39.3668V19.7356C39.3668 17.1876 37.8588 15.8876 34.7908 15.8876C32.4508 15.8876 30.9428 16.8756 30.2668 18.9036ZM30.5788 29.3556C30.5788 30.7596 31.5668 31.9036 33.2828 31.9036C34.8948 31.9036 36.2988 31.3836 37.4948 30.3956C38.7428 29.4076 39.3668 28.1076 39.3668 26.4956V25.9756H35.0508C32.0868 25.9756 30.5788 27.1196 30.5788 29.3556ZM52.5107 36.9996V0.183594H58.9587V21.0876L67.4867 10.7916H75.4427L64.9387 22.8556L76.1187 36.9996H68.2147L58.9587 24.6236V36.9996H52.5107ZM87.9877 10.3756C91.4717 10.3756 94.5397 12.0916 96.2037 14.6396L92.3557 18.1756C91.1597 16.6676 89.7037 15.8876 87.9877 15.8876C86.6877 15.8876 85.5957 16.6676 85.5957 18.0716C85.5957 19.1636 86.4277 19.9956 88.0917 20.6196L89.9637 21.2956L92.1997 22.0756C92.6157 22.2316 93.2397 22.5956 94.0717 23.0636C94.9557 23.5316 95.5797 23.9476 95.9437 24.4156C96.7237 25.2996 97.5557 26.8596 97.5557 28.6796C97.5557 31.1236 96.6717 33.1516 94.9557 34.8676C93.2397 36.5836 91.0037 37.4156 88.2477 37.4156C85.7517 37.4156 83.5677 36.6876 81.7477 35.2836C79.9277 33.8796 78.6277 32.2156 77.8477 30.3436L82.9957 27.5876C84.0357 30.4476 85.8037 31.9036 88.2477 31.9036C90.3797 31.9036 91.4717 30.9676 91.4717 29.0956C91.4717 28.2636 91.0557 27.5876 90.0677 27.1196C89.5997 26.8596 89.0797 26.6516 88.6117 26.4956C87.7277 26.0796 85.9077 25.5076 84.9197 25.0916C81.5917 23.6876 79.6157 21.7636 79.6157 18.0196C79.6157 15.8876 80.3957 14.1196 81.9557 12.6116C83.5157 11.1036 85.5437 10.3756 87.9877 10.3756ZM103.14 36.9996V0.183594H109.588V15.0036C111.512 11.9356 114.32 10.3756 117.908 10.3756C122.952 10.3756 126.072 13.0796 126.072 18.2796V36.9996H119.624V20.5676C119.624 17.4476 118.324 15.8876 115.724 15.8876C112.396 15.8876 109.588 19.3196 109.588 25.9236V36.9996H103.14ZM138.126 18.9036L132.666 17.6556C133.498 13.2876 137.398 10.3756 142.65 10.3756C149.982 10.3756 153.674 14.0156 153.674 21.3476V36.9996H148.37L147.694 33.6716C145.666 36.1676 142.962 37.4156 139.634 37.4156C135.006 37.4156 131.678 34.5036 131.678 29.4596C131.678 24.2596 136.202 20.8796 142.858 20.8796H147.226V19.7356C147.226 17.1876 145.718 15.8876 142.65 15.8876C140.31 15.8876 138.802 16.8756 138.126 18.9036ZM138.438 29.3556C138.438 30.7596 139.426 31.9036 141.142 31.9036C142.754 31.9036 144.158 31.3836 145.354 30.3956C146.602 29.4076 147.226 28.1076 147.226 26.4956V25.9756H142.91C139.946 25.9756 138.438 27.1196 138.438 29.3556ZM182.006 26.8076V36.9996H175.558V19.5276C175.558 17.0836 174.466 15.8876 172.334 15.8876C169.006 15.8876 166.666 19.8916 166.666 27.3796V36.9996H160.218V10.7916H166.666V15.0036C168.694 11.9356 171.242 10.3756 174.206 10.3756C177.586 10.3756 180.446 12.1956 181.538 15.7836C183.566 12.1956 186.218 10.3756 189.546 10.3756C194.382 10.3756 197.346 13.3916 197.346 18.4356V36.9996H190.898V19.5276C190.898 17.0836 189.806 15.8876 187.674 15.8876C184.346 15.8876 182.006 19.7356 182.006 26.8076ZM204.934 36.0636C203.27 34.3996 203.27 31.4876 204.934 29.8236C206.598 28.1596 209.51 28.1596 211.174 29.8236C212.838 31.4876 212.838 34.3996 211.174 36.0636C209.51 37.7276 206.598 37.7276 204.934 36.0636Z"
                      fill="var(--text-main)"
                    />
                  </svg>
                </motion.span>
              </Link>
            )}
          </AnimatePresence>
        </li>
        <motion.li>
          <div className="right_list">
            <AnimatePresence>
              {location === "/" || (location !== "/" && isOpen) ? (
                <motion.button
                key={"home_nav2"}
                variants={menuVariants}
                initial={"menuClosed"}
                animate={"menuOpen"}
                exit={
                  location.includes("/project/", 0)
                    ? {
                        transitionEnd: { display: "none" },
                        y: 0,
                        transition: { duration: 0.5 },
                      }
                    : "menuClosed"
                }
                className="theme-toggle"
                id="theme-toggle"
                title="Toggles light & dark"
                aria-label="auto"
                aria-live="polite"
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                }}
              >
                <svg
                  className="sun-and-moon"
                  aria-hidden="true"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <mask className="moon" id="moon-mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <circle cx="24" cy="10" r="6" fill="black" />
                  </mask>
                  <circle
                    className="sun"
                    cx="12"
                    cy="12"
                    r="6"
                    mask="url(#moon-mask)"
                    fill="currentColor"
                  />
                  <g className="sun-beams" stroke="currentColor">
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </g>
                </svg>
              </motion.button>
              ) : (
                ""
              )}
            </AnimatePresence>
            <motion.div
              className="nav__toggle link"
              variants={menuVariants}
              initial="menuClosed"
              exit={"menuClosed"}
              animate={"menuOpen"}
              transition={{ delay: 0.8 }}
              onClick={toggleHamburger}
            >
              <HamburgerToggle toggled={isOpen} />
            </motion.div>
          </div>
        </motion.li>
        <AnimatePresence>
          {isOpen ? (
            <NavList toggle={toggleHamburger} key="navbar__list" />
          ) : (
            ""
          )}
        </AnimatePresence>
      </ul>
    </motion.nav>
  );
};

export default Navbar;

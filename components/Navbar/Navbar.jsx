"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { portfolioFont } from "@/utils/fonts";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

import { HamburgerToggle } from "./HamburgerToggle";
import NavList from "./NavList";
import "./nav.css";

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

  // const [isPresent, safeToRemove] = usePresence();
  // useEffect(() => {
  //   !isPresent && setTimeout(safeToRemove, 1000);
  // }, [isPresent]);

  // 🎨 Theme Switcher
  const { theme, setTheme } = useTheme();
  const themeRef = useRef();

  const themeHandler = () => {
    themeRef.current.setAttribute("aria-label", theme);
    theme === "light" ? setTheme("dark") : setTheme("light");
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
            {location === "/" ? (
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
            ) : (
              <Link href={"/"} className="brand_logo logo">
                <motion.span>
                  <svg
                    width="214"
                    height="39"
                    viewBox="0 0 214 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      isOpen ? setIsOpen() : "";
                    }}
                  >
                    <path
                      d="M11.0111 11.3756C14.4951 11.3756 17.5631 13.0916 19.2271 15.6396L15.3791 19.1756C14.1831 17.6676 12.7271 16.8876 11.0111 16.8876C9.71109 16.8876 8.61909 17.6676 8.61909 19.0716C8.61909 20.1636 9.45109 20.9956 11.1151 21.6196L12.9871 22.2956L15.2231 23.0756C15.6391 23.2316 16.2631 23.5956 17.0951 24.0636C17.9791 24.5316 18.6031 24.9476 18.9671 25.4156C19.7471 26.2996 20.5791 27.8596 20.5791 29.6796C20.5791 32.1236 19.6951 34.1516 17.9791 35.8676C16.2631 37.5836 14.0271 38.4156 11.2711 38.4156C8.77509 38.4156 6.59109 37.6876 4.77109 36.2836C2.95109 34.8796 1.65109 33.2156 0.871094 31.3436L6.01909 28.5876C7.05909 31.4476 8.82709 32.9036 11.2711 32.9036C13.4031 32.9036 14.4951 31.9676 14.4951 30.0956C14.4951 29.2636 14.0791 28.5876 13.0911 28.1196C12.6231 27.8596 12.1031 27.6516 11.6351 27.4956C10.7511 27.0796 8.93109 26.5076 7.94309 26.0916C4.61509 24.6876 2.63909 22.7636 2.63909 19.0196C2.63909 16.8876 3.41909 15.1196 4.97909 13.6116C6.53909 12.1036 8.56709 11.3756 11.0111 11.3756ZM31.1379 19.9036L25.6779 18.6556C26.5099 14.2876 30.4099 11.3756 35.6619 11.3756C42.9939 11.3756 46.6859 15.0156 46.6859 22.3476V37.9996H41.3819L40.7059 34.6716C38.6779 37.1676 35.9739 38.4156 32.6459 38.4156C28.0179 38.4156 24.6899 35.5036 24.6899 30.4596C24.6899 25.2596 29.2139 21.8796 35.8699 21.8796H40.2379V20.7356C40.2379 18.1876 38.7299 16.8876 35.6619 16.8876C33.3219 16.8876 31.8139 17.8756 31.1379 19.9036ZM31.4499 30.3556C31.4499 31.7596 32.4379 32.9036 34.1539 32.9036C35.7659 32.9036 37.1699 32.3836 38.3659 31.3956C39.6139 30.4076 40.2379 29.1076 40.2379 27.4956V26.9756H35.9219C32.9579 26.9756 31.4499 28.1196 31.4499 30.3556ZM53.3818 37.9996V1.18359H59.8298V22.0876L68.3577 11.7916H76.3138L65.8098 23.8556L76.9898 37.9996H69.0858L59.8298 25.6236V37.9996H53.3818ZM88.8587 11.3756C92.3427 11.3756 95.4108 13.0916 97.0748 15.6396L93.2268 19.1756C92.0308 17.6676 90.5747 16.8876 88.8587 16.8876C87.5587 16.8876 86.4668 17.6676 86.4668 19.0716C86.4668 20.1636 87.2988 20.9956 88.9628 21.6196L90.8347 22.2956L93.0707 23.0756C93.4867 23.2316 94.1107 23.5956 94.9427 24.0636C95.8267 24.5316 96.4508 24.9476 96.8148 25.4156C97.5948 26.2996 98.4268 27.8596 98.4268 29.6796C98.4268 32.1236 97.5428 34.1516 95.8268 35.8676C94.1108 37.5836 91.8748 38.4156 89.1188 38.4156C86.6228 38.4156 84.4388 37.6876 82.6188 36.2836C80.7988 34.8796 79.4988 33.2156 78.7188 31.3436L83.8668 28.5876C84.9068 31.4476 86.6748 32.9036 89.1188 32.9036C91.2508 32.9036 92.3428 31.9676 92.3428 30.0956C92.3428 29.2636 91.9268 28.5876 90.9388 28.1196C90.4708 27.8596 89.9507 27.6516 89.4827 27.4956C88.5987 27.0796 86.7787 26.5076 85.7907 26.0916C82.4627 24.6876 80.4867 22.7636 80.4867 19.0196C80.4867 16.8876 81.2668 15.1196 82.8268 13.6116C84.3868 12.1036 86.4147 11.3756 88.8587 11.3756ZM104.011 37.9996V1.18359H110.459V16.0036C112.383 12.9356 115.191 11.3756 118.779 11.3756C123.823 11.3756 126.943 14.0796 126.943 19.2796V37.9996H120.495V21.5676C120.495 18.4476 119.195 16.8876 116.595 16.8876C113.267 16.8876 110.459 20.3196 110.459 26.9236V37.9996H104.011ZM138.997 19.9036L133.537 18.6556C134.369 14.2876 138.269 11.3756 143.521 11.3756C150.853 11.3756 154.545 15.0156 154.545 22.3476V37.9996H149.241L148.565 34.6716C146.537 37.1676 143.833 38.4156 140.505 38.4156C135.877 38.4156 132.549 35.5036 132.549 30.4596C132.549 25.2596 137.073 21.8796 143.729 21.8796H148.097V20.7356C148.097 18.1876 146.589 16.8876 143.521 16.8876C141.181 16.8876 139.673 17.8756 138.997 19.9036ZM139.309 30.3556C139.309 31.7596 140.297 32.9036 142.013 32.9036C143.625 32.9036 145.029 32.3836 146.225 31.3956C147.473 30.4076 148.097 29.1076 148.097 27.4956V26.9756H143.781C140.817 26.9756 139.309 28.1196 139.309 30.3556ZM182.877 27.8076V37.9996H176.429V20.5276C176.429 18.0836 175.337 16.8876 173.205 16.8876C169.877 16.8876 167.537 20.8916 167.537 28.3796V37.9996H161.089V11.7916H167.537V16.0036C169.565 12.9356 172.113 11.3756 175.077 11.3756C178.457 11.3756 181.317 13.1956 182.409 16.7836C184.437 13.1956 187.089 11.3756 190.417 11.3756C195.253 11.3756 198.217 14.3916 198.217 19.4356V37.9996H191.769V20.5276C191.769 18.0836 190.677 16.8876 188.545 16.8876C185.217 16.8876 182.877 20.7356 182.877 27.8076ZM205.806 37.0636C204.142 35.3996 204.142 32.4876 205.806 30.8236C207.47 29.1596 210.382 29.1596 212.046 30.8236C213.71 32.4876 213.71 35.3996 212.046 37.0636C210.382 38.7276 207.47 38.7276 205.806 37.0636Z"
                      stroke="var(--text-main)"
                    />
                  </svg>
                </motion.span>
              </Link>
            )}
          </AnimatePresence>
          {/* </Link> */}
        </li>

        {/* <AnimatePresence>
          {location === "/" ? (
            <motion.li
              className="center"
              key={"home_nav"}
              variants={menuVariants}
              initial={"menuClosed"}
              animate={"menuOpen"}
              exit={"menuClosed"}
            >
              Saksham <br /> Parag Agarwal
            </motion.li>
          ) : (
            ""
          )}
        </AnimatePresence> */}

        <motion.li>
          <div className="right_list">
            <AnimatePresence>
              {location === "/" || (location !== "/" && isOpen) ? (
                <motion.button
                  ref={themeRef}
                  key={"home_nav2"}
                  variants={menuVariants}
                  initial={"menuClosed"}
                  animate={"menuOpen"}
                  exit={"menuClosed"}
                  className="theme-toggle"
                  id="theme-toggle"
                  title="Toggles light & dark"
                  aria-label="auto"
                  aria-live="polite"
                  onClick={themeHandler}
                >
                  <svg
                    className="sun-and-moon"
                    aria-hidden="true"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <mask className="moon" id="moon-mask">
                      <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="white"
                      />
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

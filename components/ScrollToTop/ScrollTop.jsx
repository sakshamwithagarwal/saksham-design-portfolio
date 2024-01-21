"use client";
import "./style.css";
import { useState, useEffect } from "react";
import { motion as m, useScroll, useAnimationControls } from "framer-motion";

const ScrollTop = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const controls = useAnimationControls();
  const isBrowser = () => typeof window !== "undefined";

  useEffect(() => {
    scrollYProgress.on("change", (latestValue) => {
      const thresholdValue = isBrowser ? window.innerHeight * 1.5 : 700;
      if (latestValue > 0.3) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  }, []);

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const variant = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <m.div
      className="scroll-top"
      onClick={scrollToTop}
      variants={variant}
      initial="hide"
      animate={controls}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 64 60"
        fill="none"
      >
        <path
          d="M1.17502 50.8955C1.17502 50.1008 1.43992 49.4619 1.96973 48.9789C2.49954 48.4958 3.16959 48.2621 3.97989 48.2621C4.43356 48.2621 4.86297 48.347 5.25743 48.5275C5.35637 48.5728 5.4711 48.5739 5.56694 48.5224L6.58161 47.9769C6.73761 47.893 6.93204 47.9496 7.01858 48.1042L7.35837 48.711C7.44603 48.8675 7.3901 49.0654 7.23349 49.153L6.74978 49.4233C6.58985 49.5126 6.53787 49.716 6.60864 49.885C6.73865 50.1954 6.80033 50.5323 6.80033 50.8955C6.80033 51.7058 6.53543 52.3447 6.00562 52.8278C5.47581 53.2953 4.80576 53.529 3.97989 53.529C3.58338 53.529 3.21087 53.469 2.86235 53.349C2.77001 53.3173 2.66587 53.32 2.58875 53.3799C2.39423 53.531 2.29697 53.7343 2.29697 53.9809C2.29697 54.386 2.56187 54.5886 3.10726 54.5886H4.83693C6.41077 54.5886 7.43922 55.3833 7.43922 56.8325C7.43922 57.7519 7.11199 58.4219 6.44193 58.8738C5.78747 59.3257 4.97717 59.5439 3.99547 59.5439C1.93857 59.5439 0.536133 58.6245 0.536133 56.9572C0.536133 56.4373 0.68055 55.9897 0.977776 55.6143C1.09189 55.4702 1.09458 55.2607 0.998872 55.1038C0.837857 54.8397 0.754289 54.5133 0.754289 54.1367C0.754289 53.5652 0.96131 53.1076 1.38379 52.7638C1.54054 52.6362 1.58514 52.404 1.48641 52.2277C1.27645 51.8527 1.17502 51.411 1.17502 50.8955ZM4.49411 55.9599H3.23192C3.00985 55.9599 2.79754 55.9501 2.59501 55.9306C2.49529 55.921 2.39321 55.9528 2.33377 56.0334C2.17112 56.254 2.09439 56.5369 2.09439 56.8637C2.09439 57.6584 2.81119 58.1414 3.99547 58.1414C5.11741 58.1414 5.78747 57.7051 5.78747 56.9572C5.78747 56.2871 5.35115 55.9599 4.49411 55.9599ZM3.97989 52.1733C4.72785 52.1733 5.22649 51.6591 5.22649 50.8955C5.22649 50.132 4.72785 49.6178 3.97989 49.6178C3.2475 49.6178 2.74886 50.132 2.74886 50.8955C2.74886 51.6591 3.2475 52.1733 3.97989 52.1733Z"
          fill="var(--text-main)"
        />
        <path
          d="M9.40299 55.1963C8.70178 54.4172 8.35896 53.4511 8.35896 52.3135C8.35896 51.176 8.70178 50.2099 9.40299 49.4308C10.1042 48.6516 11.0547 48.2621 12.2234 48.2621C13.3921 48.2621 14.3271 48.6516 15.0283 49.4308C15.7295 50.2099 16.0879 51.176 16.0879 52.3135C16.0879 53.4511 15.7295 54.4172 15.0283 55.1963C14.3271 55.9755 13.3921 56.365 12.2234 56.365C11.0547 56.365 10.1042 55.9755 9.40299 55.1963ZM10.634 50.4748C10.26 50.989 10.073 51.5967 10.073 52.3135C10.073 53.0303 10.26 53.6536 10.634 54.1679C11.0236 54.6821 11.5534 54.9314 12.2234 54.9314C12.8935 54.9314 13.4233 54.6821 13.7973 54.1679C14.1868 53.6536 14.3738 53.0303 14.3738 52.3135C14.3738 51.5967 14.1868 50.989 13.7973 50.4748C13.4233 49.9606 12.8935 49.6957 12.2234 49.6957C11.5534 49.6957 11.0236 49.9606 10.634 50.4748Z"
          fill="var(--text-main)"
        />
        <path
          d="M22.5011 50.145C22.5011 49.9657 22.3558 49.8203 22.1765 49.8203H21.5168C21.3375 49.8203 21.1922 49.675 21.1922 49.4957V48.7114C21.1922 48.5321 21.3375 48.3867 21.5168 48.3867H22.1765C22.3558 48.3867 22.5011 48.2414 22.5011 48.0621V46.4007C22.5011 46.2888 22.5588 46.1847 22.6537 46.1254L23.625 45.5183C23.8413 45.3832 24.1217 45.5386 24.1217 45.7936V48.0621C24.1217 48.2414 24.2671 48.3867 24.4464 48.3867H25.8384C26.0177 48.3867 26.163 48.5321 26.163 48.7114V49.4957C26.163 49.675 26.0177 49.8203 25.8384 49.8203H24.4464C24.2671 49.8203 24.1217 49.9657 24.1217 50.145V53.6536C24.1217 54.5107 24.4645 54.9314 25.1658 54.9314C25.2924 54.9314 25.4155 54.9136 25.5351 54.8797C25.7379 54.8221 25.9735 54.9082 26.0354 55.1098L26.2525 55.8175C26.2996 55.971 26.228 56.138 26.0771 56.1928C25.7613 56.3076 25.4263 56.365 25.0723 56.365C23.514 56.365 22.5011 55.4145 22.5011 53.5602V50.145Z"
          fill="var(--text-main)"
        />
        <path
          d="M28.4856 55.1963C27.7844 54.4172 27.4415 53.4511 27.4415 52.3135C27.4415 51.176 27.7844 50.2099 28.4856 49.4308C29.1868 48.6516 30.1373 48.2621 31.306 48.2621C32.4747 48.2621 33.4097 48.6516 34.1109 49.4308C34.8121 50.2099 35.1705 51.176 35.1705 52.3135C35.1705 53.4511 34.8121 54.4172 34.1109 55.1963C33.4097 55.9755 32.4747 56.365 31.306 56.365C30.1373 56.365 29.1868 55.9755 28.4856 55.1963ZM29.7166 50.4748C29.3426 50.989 29.1556 51.5967 29.1556 52.3135C29.1556 53.0303 29.3426 53.6536 29.7166 54.1679C30.1062 54.6821 30.636 54.9314 31.306 54.9314C31.9761 54.9314 32.5059 54.6821 32.8799 54.1679C33.2694 53.6536 33.4564 53.0303 33.4564 52.3135C33.4564 51.5967 33.2694 50.989 32.8799 50.4748C32.5059 49.9606 31.9761 49.6957 31.306 49.6957C30.636 49.6957 30.1062 49.9606 29.7166 50.4748Z"
          fill="var(--text-main)"
        />
        <path
          d="M41.5837 50.145C41.5837 49.9657 41.4384 49.8203 41.2591 49.8203H40.5994C40.4201 49.8203 40.2748 49.675 40.2748 49.4957V48.7114C40.2748 48.5321 40.4201 48.3867 40.5994 48.3867H41.2591C41.4384 48.3867 41.5837 48.2414 41.5837 48.0621V46.4007C41.5837 46.2888 41.6414 46.1847 41.7363 46.1254L42.7076 45.5183C42.9238 45.3832 43.2043 45.5386 43.2043 45.7936V48.0621C43.2043 48.2414 43.3497 48.3867 43.5289 48.3867H44.921C45.1003 48.3867 45.2456 48.5321 45.2456 48.7114V49.4957C45.2456 49.675 45.1003 49.8203 44.921 49.8203H43.5289C43.3497 49.8203 43.2043 49.9657 43.2043 50.145V53.6536C43.2043 54.5107 43.5471 54.9314 44.2483 54.9314C44.375 54.9314 44.4981 54.9136 44.6176 54.8797C44.8205 54.8221 45.0561 54.9082 45.118 55.1098L45.3351 55.8175C45.3822 55.971 45.3106 56.138 45.1597 56.1928C44.8439 56.3076 44.5089 56.365 44.1548 56.365C42.5966 56.365 41.5837 55.4145 41.5837 53.5602V50.145Z"
          fill="var(--text-main)"
        />
        <path
          d="M47.5682 55.1963C46.8669 54.4172 46.5241 53.4511 46.5241 52.3135C46.5241 51.176 46.8669 50.2099 47.5682 49.4308C48.2694 48.6516 49.2199 48.2621 50.3886 48.2621C51.5573 48.2621 52.4923 48.6516 53.1935 49.4308C53.8947 50.2099 54.2531 51.176 54.2531 52.3135C54.2531 53.4511 53.8947 54.4172 53.1935 55.1963C52.4923 55.9755 51.5573 56.365 50.3886 56.365C49.2199 56.365 48.2694 55.9755 47.5682 55.1963ZM48.7992 50.4748C48.4252 50.989 48.2382 51.5967 48.2382 52.3135C48.2382 53.0303 48.4252 53.6536 48.7992 54.1679C49.1888 54.6821 49.7186 54.9314 50.3886 54.9314C51.0587 54.9314 51.5885 54.6821 51.9625 54.1679C52.352 53.6536 52.539 53.0303 52.539 52.3135C52.539 51.5967 52.352 50.989 51.9625 50.4748C51.5885 49.9606 51.0587 49.6957 50.3886 49.6957C49.7186 49.6957 49.1888 49.9606 48.7992 50.4748Z"
          fill="var(--text-main)"
        />
        <path
          d="M63.4469 52.3135C63.4469 54.8068 62.2159 56.365 59.9097 56.365C59.4179 56.365 58.9618 56.2402 58.5843 56.0382C58.3039 55.8881 57.806 56.0863 57.806 56.4044V59.0946C57.806 59.2739 57.6607 59.4192 57.4814 59.4192H56.5101C56.3308 59.4192 56.1855 59.2739 56.1855 59.0946V48.7114C56.1855 48.5321 56.3308 48.3867 56.5101 48.3867H57.6154C57.7207 48.3867 57.806 48.4721 57.806 48.5774V48.5774C57.806 48.7725 58.1393 48.8949 58.2985 48.782C58.7189 48.484 59.3165 48.2621 59.9409 48.2621C62.2315 48.2621 63.4469 49.758 63.4469 52.3135ZM61.1719 54.2302C61.5459 53.7471 61.7329 53.1083 61.7329 52.3135C61.7329 51.5188 61.5459 50.8799 61.1719 50.4125C60.7979 49.9294 60.3148 49.6957 59.7227 49.6957C59.1306 49.6957 58.6475 49.9294 58.2735 50.4125C57.8995 50.8799 57.7125 51.5188 57.7125 52.3135C57.7125 53.1083 57.8995 53.7471 58.2735 54.2302C58.6475 54.6977 59.1306 54.9314 59.7227 54.9314C60.3148 54.9314 60.7979 54.6977 61.1719 54.2302Z"
          fill="var(--text-main)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.9225 6.44835L21.3421 16.0287L19.322 14.0087L32.3509 0.979812L45.347 13.976L43.327 15.996L33.7793 6.44835L33.7793 35.4636L30.9225 35.4636L30.9225 6.44835Z"
          fill="var(--text-main)"
        />
      </svg>
    </m.div>
  );
};

export default ScrollTop;

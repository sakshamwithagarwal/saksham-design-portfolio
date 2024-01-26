"use client";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';


const Provider = ({ children, ...props }) => {
  // const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme(); 

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  const newElement = React.cloneElement(children[0], {
    isOpen: isOpen,
    setIsOpen: () => {
      setIsOpen(!isOpen);
    },
  });
 
  // if (!mounted) return <>{children}</>;

  return (
    <ThemeProvider>
      <ProgressBar
        height="4px"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {/* <Next13ProgressBar height="4px" color={theme == "light" ? "#2b2b2b" : "#c6c5c5"} options={{ showSpinner: false }} showOnShallow /> */}
      <AnimatePresence mode="wait">
        {newElement}
        {isOpen ? (
          <></>
        ) : (
          <>
            {children[1]}
          </>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Provider;

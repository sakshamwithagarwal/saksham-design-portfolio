"use client";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import React, { useState, useEffect } from "react";

const Provider = ({ children, ...props }) => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const newElement = React.cloneElement(children[0], {
    isOpen: isOpen,
    setIsOpen: () => {
      setIsOpen(!isOpen);
    },
  });

  if (!mounted) return <>{children}</>;

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {newElement}
        {isOpen ? (
          <></>
        ) : (
          <>
            {children[1]} {children[2]}
          </>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Provider;

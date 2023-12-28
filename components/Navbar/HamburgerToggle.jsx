import React from "react";

export const HamburgerToggle = ({ toggled }) => {
  return (
    <div className={toggled ? "nav_hamburger active" : "nav_hamburger"}>
      <div className="burger burger-1"></div>
      <div className="burger burger-2"></div>
      <div className="burger burger-3"></div>
    </div>
  );
};

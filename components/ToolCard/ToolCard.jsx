import React from "react";
import "./toolCard.css";

const ToolCard = ({ data }) => {
  return (
    <div className="toolCard">
      <div className="tool__description">
        <div className="tool__title">{data.toolName}</div>
        <div className="tool__subtitle">{data.toolDescription}</div>
      </div>
      <div className="tool__icon" dangerouslySetInnerHTML={{ __html: data.toolSVG }}></div>
    </div>
  );
};

export default ToolCard;

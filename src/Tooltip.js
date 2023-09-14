import React, { useState } from "react";
import "./index.css";
const Tooltip = ({ position }) => {
  // state :- it work like toggle button , when mouse enter then it will true at leave time it will be false
  const [isVisible, setIsVisible] = useState(false);

  //   handleMouseEnter function
  const handleMouseEnter = () => {
    setIsVisible(true);
  };
  // handleMouseLeave function
  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  //   getTooltipPosition function :-- this function is used for set className in our div tag it will set according to position
  const getTooltipPosition = () => {
    switch (position) {
      case "top":
        return "tooltip tooltip-top";
      case "bottom":
        return "tooltip tooltip-bottom";
      case "left":
        return "tooltip tooltip-left";
      case "right":
        return "tooltip tooltip-right";
      default:
        return "tooltip tooltip-top";
    }
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span id="over">Hover over me!</span>
      <div className={isVisible ? getTooltipPosition() : "tooltip"}>
        <span>Thanks for hovering! im a</span>
        <span>tooltip</span>
      </div>
    </div>
  );
};

export default Tooltip;

import React from "react";

const TooltipPrimary = (props) => {
  const { children, text, hide, customClass } = props;
  return (
    <div className={`tooltip-primary ${customClass}`}>
      <div className="children">{children}</div>
      {!hide && (
        <div className="tooltip hd-mb">
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

export default TooltipPrimary;

import React from "react";

const SwitchPrimary = (props) => {
  const { value, onChange, labelLeft, labelRight } = props;
  return (
    <div className="switch-primary">
      {labelLeft && <label className="label-left">{labelLeft}</label>}
      <label className="switch">
        <input type="checkbox" checked={value} value={value} onChange={onChange} />
        <span className="slider round"></span>
      </label>
      {labelRight && <label className="label-right">{labelRight}</label>}
    </div>
  );
};

export default SwitchPrimary;

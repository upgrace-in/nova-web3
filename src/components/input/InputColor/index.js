import React from "react";

export default function InputColor(props) {
  const { id, value, onChange, label } = props;
  return (
    <div className="input-color">
      <input type="color" id={id} value={value} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

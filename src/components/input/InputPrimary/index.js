import React from "react";

const InputPrimary = (props) => {
  const { label, name, value, error, onChange, onFocus, onBlur, icon, placeholder, className } = props;
  return (
    <div className="input-primary">
      <div className={`container ${value ? "active-input" : ""} ${error ? "error-input" : ""} ${className}`}>
        <i className={icon}></i>
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
        />
        <label className={value ? "active-label" : ""}>{label}</label>
      </div>
    </div>
  );
};

export default InputPrimary;

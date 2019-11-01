import React from "react";
import "./input.css";

const input = ({ type, label, id, placeholder, onChange, value }) => {
  return (
    <div className="input-holder">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default input;

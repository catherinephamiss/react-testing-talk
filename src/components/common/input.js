import React from "react";
import "./input.css";

const input = ({ type, label, id, placeholder }) => {
  return (
    <div className="input-holder">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} required />
    </div>
  );
};

export default input;

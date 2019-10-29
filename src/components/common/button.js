import React from "react";
import "./button.css";

const SiteButton = ({ type, text }) => {
  return <button type={type}>{text}</button>;
};

export default SiteButton;

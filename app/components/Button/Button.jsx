// src/components/Button/Button.jsx
import React from "react";
import { Button as PolarisButton } from "@shopify/polaris";
import "./Button.css";

const Button = ({ label, onClick, primary, disabled, size }) => {
  return (
    <PolarisButton
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      style={{ backgroundColor: "#0070f3", color: "white" }}
    >
      {label}
    </PolarisButton>
  );
};

export default Button;

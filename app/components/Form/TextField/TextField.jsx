import React from "react";
import { TextField as PolarisTextField } from "@shopify/polaris";
import "./TextField.css";

const TextField = ({ label, value, onChange, type = "text", ...rest }) => {
  return (
    <PolarisTextField
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      {...rest}
      className="custom-textfield"
    />
  );
};

export default TextField;

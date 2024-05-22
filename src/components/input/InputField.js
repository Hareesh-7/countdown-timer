import React from "react";

const InputField = ({ type, value, onChange }) => {
  return <input type={type} value={value} onChange={onChange} className="input-field" required/>;
};

export default InputField;

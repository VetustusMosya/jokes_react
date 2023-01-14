import React from "react";

export default function MyCheckbox({ children, checked }) {
  return (
    <label>
      <input defaultChecked={checked} type="checkbox" />
      {children}
    </label>
  );
}

import React from "react";

function MySelect({ langs }) {
  return (
    <select>
      {langs.map((lang) => {
        return (
          <option value={lang.value} key={lang.value}>
            {lang.text}
          </option>
        );
      })}
    </select>
  );
}

export default MySelect;

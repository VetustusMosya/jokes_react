import React, { useState } from "react";

import MyCheckbox from "./UI/MyCheckbox";
import MySelect from "./UI/MySelect";

export default function Filter() {
  const [categories, changeCategory] = useState([
    { name: "Misc", inUse: true },
    { name: "Programming", inUse: true },
    { name: "Dark", inUse: true },
    { name: "Pun", inUse: true },
    { name: "Spooky", inUse: true },
    { name: "Christmas", inUse: true },
  ]);

  const langs = [
    { value: "en", text: "English" },
    { value: "cs", text: "Czech" },
    { value: "de", text: "German" },
    { value: "es", text: "Spanish" },
    { value: "fr", text: "French" },
    { value: "pt", text: "Portuguese" },
  ];

  return (
    <div className="filter__checkboxes container">
      {categories.map((ctg) => {
        return (
          <MyCheckbox checked={ctg.inUse} key={ctg.name}>
            {ctg.name}
          </MyCheckbox>
        );
      })}
      <MySelect langs={langs}></MySelect>
    </div>
  );
}

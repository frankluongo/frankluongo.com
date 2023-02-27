import React from "react";

import * as css from "./TagsList.module.css";

export const TagsList = ({ items }) => {
  return (
    <ul className={css.TagsList}>
      {items.map((item, i) => (
        <li className={css.Tag} key={`${item}-${i}`}>
          {item}
        </li>
      ))}
    </ul>
  );
};

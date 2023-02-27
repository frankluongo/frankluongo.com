import React from "react";

import * as css from "./Button.module.css";

export function Button({ Tag, children, ...props }) {
  return (
    <Tag className={css.Button} {...props}>
      {children}
    </Tag>
  );
}

Button.defaultProps = {
  Tag: "a",
};

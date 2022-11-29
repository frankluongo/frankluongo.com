import React from "react";

import * as css from "./Logo.module.css";

export const Logo = ({ type }) => {
  return (
    <div className={css.Logo}>
      <span
        className={css.Heading}
        style={{ color: `var(--theme-color-text-${type})` }}
      >
        Frank Luongo
      </span>
      <span className={css.Subheading}>Design Co.</span>
    </div>
  );
};

Logo.defaultProps = {
  type: "default",
};

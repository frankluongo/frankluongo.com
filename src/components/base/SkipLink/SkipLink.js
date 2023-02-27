import React from "react";

import * as css from "./SkipLink.module.css";

export const SkipLink = () => {
  return (
    <a className={css.SkipLink} href="#main">
      Skip to main content
    </a>
  );
};

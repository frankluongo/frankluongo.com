import React from "react";
import { classes } from "#helpers/classes";

import * as css from "./SectionHeader.module.css";

export const SectionHeader = ({ children, headerStyle }) => {
  const headerClasses = classes([css.Header, "container"]);
  return (
    <header className={headerClasses} data-style={headerStyle}>
      <div className={css.HeaderBg} />
      <h2 className={css.H2}>{children}</h2>
    </header>
  );
};

SectionHeader.defaultProps = {
  headerStyle: "yellow",
};

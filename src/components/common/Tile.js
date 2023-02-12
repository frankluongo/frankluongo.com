import React from "react";

import * as css from "#styles/components/Tile.module.css";
import { classes } from "../../helpers/classes";

export const Tile = ({ children, extraClasses, styleOverrides }) => {
  return (
    <article
      className={classes([css.Tile, extraClasses])}
      style={styleOverrides}
    >
      {children}
    </article>
  );
};

Tile.defaultProps = {
  styleOverrides: {},
};

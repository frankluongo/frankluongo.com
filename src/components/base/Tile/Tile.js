import React from "react";

import { classes } from "#helpers/classes";

import * as css from "./Tile.module.css";

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

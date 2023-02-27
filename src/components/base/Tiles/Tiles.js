import React from "react";

import { classes } from "#helpers/classes";

import * as css from "./Tiles.module.css";

export const Tiles = ({ children, extraClasses }) => {
  return (
    <section className={classes([css.Tiles, extraClasses])}>{children}</section>
  );
};

import React from "react";

import * as css from "#styles/components/Tiles.module.css";
import { classes } from "../helpers/classes";

export const Tiles = ({ children, extraClasses }) => {
  return (
    <section className={classes([css.Tiles, extraClasses])}>{children}</section>
  );
};

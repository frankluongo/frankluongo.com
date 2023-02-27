import React from "react";

import { classes } from "#helpers/classes";

import * as css from "./BlogPost.module.css";

export const BlogPost = (props) => {
  const classNames = classes([css.BlogPost, "flex col gap:1"]);
  return <article className={classNames} {...props} />;
};

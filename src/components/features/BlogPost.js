import React from "react";

import * as css from "#styles/components/BlogPost.module.css";
import { classes } from "#helpers/classes";

export const BlogPost = (props) => {
  const classNames = classes([css.BlogPost, "flex col gap:1"]);
  return <article className={classNames} {...props} />;
};

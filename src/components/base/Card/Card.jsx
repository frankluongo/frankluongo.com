import React from "react";

import * as css from "./Card.module.css";

export const Card = ({ children, extraClasses, Tag, ...rest }) => {
  return (
    <Tag className={`${css.Card} ${extraClasses}`} {...rest}>
      {children}
    </Tag>
  );
};

Card.defaultProps = {
  extraClasses: "",
  Tag: "article",
};

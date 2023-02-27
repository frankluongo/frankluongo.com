import React from "react";

export const Column = ({ children, colSpan, extraClasses, Tag, ...rest }) => {
  const columns = Object.keys(colSpan)
    .map((key) => {
      if (key === "default") return `col:${colSpan[key]}`;
      return `${key}:col:${colSpan[key]}`;
    })
    .join(" ");

  return (
    <Tag className={`${columns} ${extraClasses}`} {...rest}>
      {children}
    </Tag>
  );
};

Column.defaultProps = {
  colSpan: { default: 12 },
  extraClasses: "",
  Tag: "div",
};

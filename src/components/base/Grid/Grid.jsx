import React from "react";

export const Grid = ({
  children,
  extraClasses,
  Tag,
  useDefaultGrid,
  ...rest
}) => {
  const classes = useDefaultGrid
    ? `grid grid:12 gap ${extraClasses}`
    : `grid ${extraClasses}`;

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
};

Grid.defaultProps = {
  extraClasses: "",
  Tag: "div",
  useDefaultGrid: true,
};

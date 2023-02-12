import React from "react";
import { Button } from "#common/Button";
import { useMeta } from "#lib/useMeta";

export const EmailMe = ({ children, Tag, ...rest }) => {
  const email = useMeta()?.businessEmail?.title;

  return (
    <Tag href={`mailto:${email}`} {...rest}>
      {children}
    </Tag>
  );
};

EmailMe.defaultProps = {
  Tag: Button,
};

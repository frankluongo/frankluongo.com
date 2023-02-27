import React from "react";

import { useMeta } from "#lib/useMeta";

import * as css from "./Availability.module.css";

const Checkmark = () => <>✅</>;

const icons = {
  checkmark: Checkmark,
};

export const Availability = ({ extraClasses }) => {
  const { availability: avail } = useMeta();
  const status = avail.title;
  const Icon = icons[avail.properties.content.value];
  return (
    <article
      className={`${css.Availability} flex align-items:center gap:0.5 ${extraClasses}`}
    >
      <Icon />
      &nbsp;
      {status}
    </article>
  );
};

Availability.defaultProps = {
  extraClasses: "",
};

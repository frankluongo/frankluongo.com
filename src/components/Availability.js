import React from "react";

import * as css from "./Availability.module.css";
import { useMeta } from "../lib/useMeta";

const icons = {
  checkmark: Checkmark,
};

export const Availability = ({ extraClasses }) => {
  const { availability: avail } = useMeta();
  const status = avail.title;
  const Icon = icons[avail.properties.content.value];
  return (
    <article className={`${css.Availability} ${extraClasses}`}>
      <Icon />
      {status}
    </article>
  );
};

Availability.defaultProps = {
  extraClasses: "justify-center",
};

function Checkmark() {
  return (
    <div
      style={{
        backgroundColor: `var(--color-green)`,
        borderRadius: "50%",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        style={{
          fill: "white",
        }}
      >
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
      </svg>
    </div>
  );
}

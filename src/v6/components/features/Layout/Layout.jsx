import React from "react";
import Application from "#v6/components/features/Application/Application";

import "#v6/styles/fonts.css";
import "#v6/styles/global.css";
import "#v6/styles/typography.css";
import "#v6/styles/variables.css";

export default function Layout({ children }) {
  return <Application>{children}</Application>;
}

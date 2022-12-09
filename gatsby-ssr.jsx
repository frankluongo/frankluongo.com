import React from "react";
import { Layout } from "./src/components/Layout";

import "./src/styles/app.css";

const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" });
};

export { onRenderBody, wrapPageElement };

import React from "react";
import Layout from "./src/v6/components/features/Layout/Layout";

const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" });
};

export { onRenderBody, wrapPageElement };

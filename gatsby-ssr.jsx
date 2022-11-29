import React from "react";
import { Layout } from "./src/components/Layout";

import "./src/styles/app.css";

const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export { wrapPageElement };

import React from "react";
import { MobileCtxProvider } from "#context/mobileNav";
import { SettingsProvider } from "#context/settings";
import { App } from "../App";

import "@frankluongo/css-starter";

export const Layout = ({ children }) => {
  return (
    <SettingsProvider>
      <MobileCtxProvider>
        <App>{children}</App>
      </MobileCtxProvider>
    </SettingsProvider>
  );
};

export default Layout;

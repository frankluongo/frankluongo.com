import React from "react";
import Application from "#features/Application/Application";
import { SettingsProvider } from "#lib/Settings";

import "#styles/fonts.css";
import "#styles/global.css";
import "#styles/typography.css";
import "#styles/variables.css";

export default function Layout({ children }) {
  return (
    <SettingsProvider>
      <Application>{children}</Application>
    </SettingsProvider>
  );
}

import React, { useEffect } from "react";
import { userInteracted, useSettings } from "../context/settings";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { SettingsToggle } from "./SettingsToggle";
import { SkipLink } from "./SkipLink";

export const App = ({ children }) => {
  const { dispatch } = useSettings();

  useEffect(() => {
    function setInteracted() {
      dispatch({ type: userInteracted });
    }
    document.addEventListener("click", setInteracted, { once: true });
  }, [dispatch]);

  return (
    <>
      <SkipLink />
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <SettingsToggle />
    </>
  );
};

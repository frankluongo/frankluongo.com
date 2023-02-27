import React, { useEffect } from "react";
import { userInteracted, useSettings } from "../context/settings";

import { Footer } from "#features/Footer/Footer";
import { Header } from "#base/Header/Header";
import { SettingsToggle } from "#features/SettingsToggle/SettingsToggle";
import { SkipLink } from "#base/SkipLink/SkipLink";

const modes = { true: "is-dark", false: "is-light" };
const themeClasses = Object.values(modes);

export const App = ({ children }) => {
  const { state, dispatch } = useSettings();
  const darkMode = state.darkMode;

  useEffect(() => {
    function setInteracted() {
      dispatch({ type: userInteracted });
    }
    document.addEventListener("click", setInteracted, { once: true });
  }, [dispatch]);

  useEffect(() => {
    const classes = Array.from(document.documentElement.classList.values());
    const conflicts = classes.filter((clss) => themeClasses.includes(clss));
    document.documentElement.classList.remove(...conflicts);
    document.documentElement.classList.add(modes[darkMode]);
  }, [darkMode]);

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

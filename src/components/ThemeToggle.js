import React, { useEffect } from "react";

import { classes } from "#helpers/classes";

import { useSettings, toggleDarkMode } from "../context/settings";

import * as css from "#styles/components/ThemeToggle.module.css";

const modes = { true: "is-dark", false: "is-light" };
const themeClasses = Object.values(modes);

export const ThemeToggle = () => {
  const { state, dispatch } = useSettings();
  const darkMode = state.darkMode;

  const wrapperClasses = classes(["flex align-items:center"]);

  function changeMode() {
    dispatch({ type: toggleDarkMode });
  }

  useEffect(() => {
    const classes = Array.from(document.documentElement.classList.values());
    const conflicts = classes.filter((clss) => themeClasses.includes(clss));
    document.documentElement.classList.remove(...conflicts);
    document.documentElement.classList.add(modes[darkMode]);
  }, [darkMode]);

  return (
    <article className={wrapperClasses}>
      <label className={css.Switch}>
        <input
          className={css.SwitchInput}
          onChange={changeMode}
          type="checkbox"
          defaultChecked={darkMode}
        />
        <span className={css.SwitchSlider} />
      </label>
    </article>
  );
};

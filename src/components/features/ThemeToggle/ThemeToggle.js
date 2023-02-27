import React from "react";

import { classes } from "#helpers/classes";

import { useSettings, toggleDarkMode } from "#context/settings";

import * as css from "./ThemeToggle.module.css";

export const ThemeToggle = () => {
  const { state, dispatch } = useSettings();
  const darkMode = state.darkMode;

  const wrapperClasses = classes(["flex align-items:center"]);

  function changeMode() {
    dispatch({ type: toggleDarkMode });
  }

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

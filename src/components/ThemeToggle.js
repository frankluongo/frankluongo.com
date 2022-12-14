import React, { useEffect } from "react";

import { useMediaQuery } from "#hooks/useMediaQuery";
import { useLocalStore } from "#hooks/useLocalStore";

import { classes } from "#helpers/classes";

import * as css from "#styles/components/ThemeToggle.module.css";

const DARK_MODE = "darkMode";

const modes = { true: "is-dark", false: "is-light" };
const themeClasses = Object.values(modes);

export const ThemeToggle = () => {
  const darkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [colorMode, setLocal, setState] = useLocalStore(DARK_MODE, darkMode);
  const wrapperClasses = classes([
    css.ThemeToggle,
    "flex align-items:center justify-content:center",
  ]);
  const btnClasses = classes([
    css.SaveColorMode,
    "flex align-items:center justify-content:center",
  ]);

  function changeMode(e) {
    setState(e.target.checked);
  }

  function saveMode() {
    setLocal(colorMode);
    alert("Color preferences saved!");
  }

  useEffect(() => {
    const classes = Array.from(document.documentElement.classList.values());
    const conflicts = classes.filter((clss) => themeClasses.includes(clss));
    document.documentElement.classList.remove(...conflicts);
    document.documentElement.classList.add(modes[colorMode]);
  }, [colorMode]);

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
      <button className={btnClasses} onClick={saveMode} title="Save Color Mode">
        <svg
          className={css.Icon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M433.1 129.1l-83.9-83.9C342.3 38.32 327.1 32 316.1 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V163.9C448 152.9 441.7 137.7 433.1 129.1zM224 416c-35.34 0-64-28.66-64-64s28.66-64 64-64s64 28.66 64 64S259.3 416 224 416zM320 208C320 216.8 312.8 224 304 224h-224C71.16 224 64 216.8 64 208v-96C64 103.2 71.16 96 80 96h224C312.8 96 320 103.2 320 112V208z" />
        </svg>
      </button>
    </article>
  );
};

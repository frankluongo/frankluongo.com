import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { useSettings, toggleSounds } from "../context/settings";

import { Button } from "./Button";
import { ThemeToggle } from "./ThemeToggle";
import { useAudio } from "../hooks/useAudio";
import { SOUNDS } from "../constants/sounds";
import { useSound } from "../hooks/useSound";

import * as css from "#styles/components/SettingsComponent.module.css";

export const SettingsComponent = ({ setToggle }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { state, dispatch } = useSettings();
  const audioEnabled = useAudio(SOUNDS.transportIn);
  const audioDisabled = useAudio(SOUNDS.transportOut);
  const pauseAudio = useSound(SOUNDS.pause);

  const settingsElRef = useRef(null);

  const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      type: "spring",
      stiffness: 100,
    },
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Escape Key Listener:
  useEffect(() => {
    function onEsc(e) {
      if (e.key !== "Escape") return;
      pauseAudio();
      setToggle(false);
    }
    document.addEventListener("keyup", onEsc);
    return () => document.removeEventListener("keyup", onEsc);
  }, [pauseAudio, setToggle]);

  useEffect(() => {
    function onClick(e) {
      const settingsEl = settingsElRef.current;
      if (!isLoaded || !settingsEl || settingsEl.contains(e.target)) return;
      pauseAudio();
      setToggle(false);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pauseAudio, setToggle, isLoaded]);

  return (
    <motion.section className={css.SettingsWrapper} {...animation}>
      <article className={css.Settings} ref={settingsElRef}>
        <h2>Settings</h2>
        <section className="flex flex-direction:column gap:1">
          <h3 className="h4">Toggle Dark/Light Mode</h3>
          <ThemeToggle />
        </section>
        <section className="flex flex-direction:column gap:1">
          <h3 className="h4">Enable/Disable sounds</h3>
          <Button
            onClick={toggleSoundsFn}
            data-size="small"
            data-theme="dark"
            data-nohover
          >
            Sounds {state.enableSounds ? "Enabled" : "Disabled"}
          </Button>
        </section>
      </article>
    </motion.section>
  );

  function toggleSoundsFn() {
    state.enableSounds ? audioDisabled.play() : audioEnabled.play();
    dispatch({ type: toggleSounds });
  }
};

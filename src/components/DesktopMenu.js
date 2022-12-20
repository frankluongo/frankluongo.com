import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Link } from "gatsby";

import { useNav } from "#lib/useNav";

import { useSettings } from "../context/settings";
import { useAudio } from "../hooks/useAudio";
import * as css from "#styles/components/DesktopMenu.module.css";

export const DesktopMenu = () => {
  const { state } = useSettings();
  const links = useNav();
  return (
    <ul className={css.Links} data-display="largeUp">
      {links.map((link) => (
        <MenuLink key={`${link.id}-desktop`} {...link} state={state} />
      ))}
    </ul>
  );
};

function MenuLink({ content, slug, state, title }) {
  const [active, setActive] = useState(false);
  const switchAudio = useAudio("/sounds/switch.mp3");
  const stageSelectAudio = useAudio("/sounds/stage_select.mp3");

  const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      type: "spring",
      stiffness: 100,
    },
  };

  return (
    <li className={css.ListItem}>
      <Link
        className={css.Link}
        to={slug}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => setActive(false)}
        onKeyUp={onKeyUp}
      >
        {title}
      </Link>
      <AnimatePresence>
        {active && (
          <motion.article {...animation} className={css.Description}>
            {content}
          </motion.article>
        )}
      </AnimatePresence>
    </li>
  );

  function onClick() {
    state.enableSounds && stageSelectAudio.play();
    setActive(false);
  }

  function onKeyUp(e) {
    if (e.key !== "Tab") return;
    state.enableSounds && switchAudio.play();
  }

  function onMouseEnter() {
    state.userInteracted && state.enableSounds && switchAudio.play();
    setActive(true);
  }
}

import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Link } from "gatsby";

import { useNav } from "#lib/useNav";

import { useSettings } from "../context/settings";
import { useSound } from "../hooks/useSound";
import { SOUNDS } from "../constants/sounds";

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
  const switchAudio = useSound(SOUNDS.switch);
  const stageSelectAudio = useSound(SOUNDS.stageSelect);

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
    stageSelectAudio();
    setActive(false);
  }

  function onKeyUp(e) {
    if (e.key !== "Tab") return;
    switchAudio();
  }

  function onMouseEnter() {
    state.userInteracted && switchAudio();
    setActive(true);
  }
}

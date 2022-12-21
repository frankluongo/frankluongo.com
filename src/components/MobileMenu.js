import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMobileCtx } from "../context/mobileNav";

import { useNav } from "#lib/useNav";

import { Link } from "gatsby";
import { Socials } from "./Socials";
import { useSound } from "../hooks/useSound";
import { SOUNDS } from "../constants/sounds";

import * as css from "#styles/components/MobileMenu.module.css";

export const MobileMenu = () => {
  const links = useNav();
  const { navOpen } = useMobileCtx();
  const stageSelectAudio = useSound(SOUNDS.stageSelect);

  const animation = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <AnimatePresence>
      {navOpen && (
        <motion.nav
          className={css.MobileMenu}
          {...animation}
          data-display="largeDown"
        >
          <ul className={css.Links}>
            {links.map((link) => (
              <li key={link.id}>
                <Link className={css.Link} to={link.slug} onClick={onClick}>
                  <div className={css.LinkTitle}>{link.titleMobile}</div>
                  <span className={css.LinkDescription}>{link.content}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Socials type="cards" />
        </motion.nav>
      )}
    </AnimatePresence>
  );

  function onClick() {
    stageSelectAudio();
  }
};

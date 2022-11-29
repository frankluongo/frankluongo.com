import React, { useState } from "react";

import { Link } from "gatsby";
import { AnimatePresence, motion } from "framer-motion";

import { links } from "#lib/links";

import * as css from "./DesktopMenu.module.css";

export const DesktopMenu = () => {
  return (
    <ul className={css.Links} data-display="desktopOnly" data-unstyled="list">
      {links.map((link) => (
        <MenuLink key={`${link.url}-desktop`} {...link} />
      ))}
    </ul>
  );
};

function MenuLink({ description, url, titleDesktop }) {
  const [active, setActive] = useState(false);

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
    <li
      className={css.ListItem}
      key={`${url}-desktop`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <Link className={css.Link} to={url}>
        {titleDesktop}
      </Link>
      <AnimatePresence>
        {active && (
          <motion.article {...animation} className={css.Description}>
            {description}
          </motion.article>
        )}
      </AnimatePresence>
    </li>
  );
}

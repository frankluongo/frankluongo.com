import React, { useState } from "react";

import { Link } from "gatsby";
import { AnimatePresence, motion } from "framer-motion";

import { useNav } from "#lib/useNav";

import * as css from "./DesktopMenu.module.css";

export const DesktopMenu = () => {
  const links = useNav();
  return (
    <ul className={css.Links} data-display="largeUp">
      {links.map((link) => (
        <MenuLink key={`${link.id}-desktop`} {...link} />
      ))}
    </ul>
  );
};

function MenuLink({ content, slug, title }) {
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
    <li className={css.ListItem}>
      <Link
        className={css.Link}
        to={slug}
        onClick={() => setActive(false)}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
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
}

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMobileCtx } from "../presentation/mobileNav";

import { links } from "../lib/links";

import * as css from "./MobileMenu.module.css";
import { Link } from "gatsby";
import { Socials } from "./Socials";

export const MobileMenu = () => {
  const { navOpen } = useMobileCtx();

  const animation = {
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  return (
    <AnimatePresence>
      {navOpen && (
        <motion.nav
          className={css.MobileMenu}
          {...animation}
          data-display="mobileOnly"
        >
          <ul className={css.Links} data-unstyled="list">
            {links.map((link) => (
              <li key={link.url}>
                <Link className={css.Link} to={link.url}>
                  <div className={css.LinkTitle}>{link.titleMobile}</div>
                  <span className={css.LinkDescription}>
                    {link.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Socials />
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

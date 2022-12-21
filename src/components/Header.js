import * as React from "react";

import { Logo } from "./Logo";
import { DesktopMenu } from "./DesktopMenu";
import { MobileToggle } from "./MobileToggle";
import { Socials } from "./Socials";

import * as css from "#styles/components/Header.module.css";
import { Link } from "gatsby";

export const Header = () => {
  return (
    <header className={css.Header} data-app-header>
      <section className="container flex gap:2" data-container>
        <Link to="/">
          <Logo type="color-white" />
        </Link>
        <DesktopMenu />
        <Socials data-display="largeUp" />
        <MobileToggle />
      </section>
    </header>
  );
};

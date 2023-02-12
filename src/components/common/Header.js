import * as React from "react";

import { Logo } from "./Logo";
import { DesktopMenu } from "../features/DesktopMenu";
import { MobileToggle } from "../features/MobileToggle";
import { Socials } from "../features/Socials";

import * as css from "#styles/components/Header.module.css";
import { Link } from "gatsby";

export const Header = () => {
  return (
    <header className={css.Header} data-app-header>
      <section className="container flex gap:2" data-container>
        <Link to="/" alt="Visit home page" title="Visit home page">
          <Logo type="color-white" />
        </Link>
        <DesktopMenu />
        <Socials data-display="largeUp" />
        <MobileToggle />
      </section>
    </header>
  );
};

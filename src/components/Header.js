import * as React from "react";

import { Logo } from "./Logo";
import { DesktopMenu } from "./DesktopMenu";
import { MobileToggle } from "./MobileToggle";
import { Socials } from "./Socials";

import * as css from "./Header.module.css";

export const Header = () => {
  return (
    <header className={css.Header} data-app-header>
      <section className="container flex gap:2" data-container>
        <Logo type="alternate" />
        <DesktopMenu />
        <Socials data-display="largeUp" />
        <MobileToggle />
      </section>
    </header>
  );
};

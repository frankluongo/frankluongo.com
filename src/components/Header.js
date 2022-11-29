import * as React from "react";

import { Logo } from "./Logo";
import { DesktopMenu } from "./DesktopMenu";
import { MobileToggle } from "./MobileToggle";
import { Socials } from "./Socials";

import * as css from "./Header.module.css";

export const Header = () => {
  return (
    <header className={css.Header} data-app-header>
      <section className={css.Container} data-container>
        <Logo type="alternate" />
        <DesktopMenu />
        <Socials data-display="desktopOnly" />
        <MobileToggle />
      </section>
    </header>
  );
};

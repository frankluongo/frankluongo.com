import * as React from "react";

import { Logo } from "#base/Logo/Logo";
import { DesktopMenu } from "#features/DesktopMenu/DesktopMenu";
import { MobileToggle } from "#features/MobileToggle/MobileToggle";
import { Socials } from "#features/Socials/Socials";

import { Link } from "gatsby";

import * as css from "./Header.module.css";

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

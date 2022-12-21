import React from "react";
import { useMobileCtx } from "../context/mobileNav";
import { MobileMenu } from "./MobileMenu";

import { useSound } from "../hooks/useSound";
import { SOUNDS } from "../constants/sounds";

import * as css from "#styles/components/MobileToggle.module.css";

export const MobileToggle = () => {
  const { navOpen, setNavOpen } = useMobileCtx();
  const label = navOpen ? "Close" : "Menu";
  const MobileIcon = navOpen ? MobileToggleClose : MobileToggleOpen;
  const switchAudio = useSound(SOUNDS.switch);

  function onToggle() {
    switchAudio();
    setNavOpen(!navOpen);
  }

  return (
    <>
      <button
        aria-expanded={navOpen}
        className={css.MobileToggle}
        data-display="largeDown"
        onClick={onToggle}
      >
        <MobileIcon />
        {label}
      </button>
      <MobileMenu />
    </>
  );
};

function MobileToggleClose() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.41425"
        y="0.050293"
        width="12"
        height="2"
        rx="1"
        transform="rotate(45 1.41425 0.050293)"
      />
      <rect
        y="8.53564"
        width="12"
        height="2"
        rx="1"
        transform="rotate(-45 0 8.53564)"
      />
    </svg>
  );
}

function MobileToggleOpen() {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="12" height="2" rx="1" fill="white" />
      <rect y="3" width="12" height="2" rx="1" fill="white" />
      <rect x="4" y="6" width="8" height="2" rx="1" fill="white" />
    </svg>
  );
}

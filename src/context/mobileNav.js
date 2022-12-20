import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "@reach/router";
import { useMediaQuery } from "#hooks/useMediaQuery";

const defaultValues = {
  navOpen: false,
  setNavOpen: () => {},
};

const MobileCtx = createContext(defaultValues);

export const MobileCtxProvider = ({ children }) => {
  const pathname = useLocation().pathname;
  const [navOpen, setNavOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 999px)");

  useEffect(() => {
    if (isMobile) return;
    setNavOpen(false);
  }, [isMobile]);

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <MobileCtx.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </MobileCtx.Provider>
  );
};

export const useMobileCtx = () => useContext(MobileCtx);

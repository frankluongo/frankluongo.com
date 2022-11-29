import React, { createContext, useContext, useEffect, useState } from "react";
import { useMediaQuery } from "./useMediaQuery";

const defaultValues = {
  navOpen: false,
  setNavOpen: () => {},
};

const MobileCtx = createContext(defaultValues);

export const MobileCtxProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 999px)");

  useEffect(() => {
    if (isMobile) return;
    setNavOpen(false);
  }, [isMobile]);

  return (
    <MobileCtx.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </MobileCtx.Provider>
  );
};

export const useMobileCtx = () => useContext(MobileCtx);

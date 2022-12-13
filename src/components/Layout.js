import React from "react";
import { MobileCtxProvider } from "../presentation/mobileNav";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SkipLink } from "./SkipLink";
import { ThemeToggle } from "./ThemeToggle";

export const Layout = ({ children }) => {
  return (
    <MobileCtxProvider>
      <SkipLink />
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <ThemeToggle />
    </MobileCtxProvider>
  );
};

export default Layout;

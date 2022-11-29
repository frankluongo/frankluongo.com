import React from "react";
import { MobileCtxProvider } from "../presentation/mobileNav";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SkipLink } from "./SkipLink";

export const Layout = ({ children }) => {
  return (
    <MobileCtxProvider>
      <SkipLink />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </MobileCtxProvider>
  );
};

export default Layout;

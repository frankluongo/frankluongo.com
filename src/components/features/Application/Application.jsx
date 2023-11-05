import React from "react";
import Footer from "#features/Footer/Footer";
import Header from "#features/Header/Header";
import Skip from "#features/Skip/Skip";

import useApplication from "./useApplication";

export default function Application({ children }) {
  useApplication();
  return (
    <>
      <Skip />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

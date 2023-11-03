import React from "react";
import Footer from "#v6/components/features/Footer/Footer";
import Header from "#v6/components/features/Header/Header";
import Skip from "#v6/components/features/Skip/Skip";

export default function Application({ children }) {
  return (
    <>
      <Skip />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

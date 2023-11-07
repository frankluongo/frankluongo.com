import { AnimatePresence } from "framer-motion";
import React from "react";
import useDropdown from "./useDropdown";

export default function Dropdown({ children, ...rest }) {
  const { open } = useDropdown();
  return (
    <>
      <button>click me</button>
      <AnimatePresence>{open && <div>{children}</div>}</AnimatePresence>
    </>
  );
}

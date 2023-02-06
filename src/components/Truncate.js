import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "#components/Button";

export const Truncate = ({ children, rest }) => {
  const [visible, setIsVisible] = useState(false);

  const text = visible ? "Less" : "More";

  const animation = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <>
      {children}
      <Button
        Tag="button"
        data-size="tiny"
        data-theme="naked"
        onClick={() => setIsVisible(!visible)}
      >
        Read {text}
      </Button>
      <AnimatePresence>
        {visible && <motion.div {...animation}>{rest}</motion.div>}
      </AnimatePresence>
    </>
  );
};

import { useState } from "react";

export default function useDropdown() {
  const [open, setOpen] = useState(false);

  return { open };
}

import { useState } from "react";

export default function useSlideshow(defaultStart = 0) {
  const [index, setIndex] = useState(defaultStart);

  return { index, selectItem };

  function selectItem(newIndex) {
    setIndex(newIndex);
  }
}

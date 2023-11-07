import { useState } from "react";

export default function useSlideshow(defaultStart = 0) {
  const [index, setIndex] = useState(defaultStart);
  const [clickCount, setClickCount] = useState(0);

  return { clickCount, index, selectItem, updateClickCount };

  function selectItem(newIndex) {
    setIndex(newIndex);
    setClickCount(0);
  }

  function updateClickCount() {
    setClickCount(clickCount + 1);
  }
}

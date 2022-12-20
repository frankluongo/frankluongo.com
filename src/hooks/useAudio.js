import { useEffect, useState } from "react";

export function useAudio(path) {
  const [audio, setAudio] = useState({ play: () => {} });

  useEffect(() => {
    setAudio(new Audio(path));
  }, [path]);

  return audio;
}

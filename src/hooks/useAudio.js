import { useEffect, useState } from "react";

export function useAudio(path) {
  const [audio, setAudio] = useState({ play: () => {} });

  useEffect(() => {
    const audioEl = new Audio(path);
    audioEl.volume = 0.25;
    setAudio(audioEl);
  }, [path]);

  return audio;
}

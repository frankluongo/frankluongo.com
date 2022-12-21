import { useAudio } from "./useAudio";
import { useSettings } from "../context/settings";

export function useSound(path) {
  const { state } = useSettings();
  const audio = useAudio(path);

  return playSound;

  function playSound() {
    console.log("playing sound...");
    if (!audio) return;
    state.enableSounds && audio.play();
  }
}

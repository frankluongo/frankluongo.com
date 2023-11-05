import { useAudio } from "./useAudio";
import { useSettings } from "#lib/Settings";

export function useSound(path) {
  const { state } = useSettings();
  const audio = useAudio(path);

  return playSound;

  function playSound() {
    if (!audio) return;
    state.enableSounds && audio.play();
  }
}

import { useSettings } from "#lib/Settings";

import { SOUNDS } from "./sounds";

export function useAudio() {
  const { state } = useSettings();
  const canPlay = state.userInteracted && state.enableSounds;

  const playPause = () => playSound(SOUNDS.pause);
  const playStageSelect = () => playSound(SOUNDS.stageSelect);
  const playSwitch = () => playSound(SOUNDS.switch);
  const playTransportIn = () => playSound(SOUNDS.transportIn);
  const playTransportOut = () => playSound(SOUNDS.transportOut);

  return {
    playPause,
    playStageSelect,
    playSwitch,
    playTransportIn,
    playTransportOut,
  };

  function playSound(path) {
    const sound = new Audio(path);
    sound.volume = 0.05;
    canPlay && sound.play();
  }
}

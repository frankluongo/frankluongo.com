import { isBrowser } from "../helpers/isBrowser";

export function useAudio(path) {
  // if it's not a browser, just pretend:
  if (!isBrowser)
    return {
      play: () => {},
    };

  return new Audio(path);
}

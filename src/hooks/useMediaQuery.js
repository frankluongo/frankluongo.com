import { useEffect, useState } from "react";
import { isBrowser } from "../helpers/isBrowser";

export function useMediaQuery(query) {
  const mediaQuery = isBrowser() && window.matchMedia(query);
  const [matches, setMatches] = useState(mediaQuery.matches);

  useEffect(() => {
    function onChange(e) {
      setMatches(e.matches);
    }
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, [mediaQuery]);

  if (!isBrowser()) return false;
  return matches;
}

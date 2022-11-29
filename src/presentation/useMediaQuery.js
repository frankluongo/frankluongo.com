import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const mediaQuery = matchMedia(query);
  const [matches, setMatches] = useState(mediaQuery.matches);

  useEffect(() => {
    function onChange(e) {
      setMatches(e.matches);
    }
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, [mediaQuery]);

  return matches;
}

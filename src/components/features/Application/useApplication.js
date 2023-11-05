import { useEffect } from "react";
import { USER_INTERACTED } from "#lib/Settings/reducer";
import { useSettings } from "#lib/Settings";

export default function useApplication() {
  const { dispatch } = useSettings();
  useEffect(() => {
    function setInteracted() {
      dispatch({ type: USER_INTERACTED });
    }
    document.addEventListener("click", setInteracted, { once: true });
  }, [dispatch]);
}

import REFRESH_URL from "./refreshUrl";
import {
  INITIAL,
  LOADING,
  SUCCESS,
  FAILURE,
  REFRESH_STATES,
} from "./refreshStates";
import { useState } from "react";

export default function useRefreshHook() {
  const [sentStatus, setSentStatus] = useState(INITIAL);

  return { deploy, sentStatus, status: REFRESH_STATES, INITIAL };

  async function deploy() {
    setSentStatus(LOADING);
    try {
      const res = await fetch(REFRESH_URL, { method: "POST" });
      if (res.ok) setSentStatus(SUCCESS);
    } catch (e) {
      console.error(e);
      setSentStatus(FAILURE);
    }
  }
}

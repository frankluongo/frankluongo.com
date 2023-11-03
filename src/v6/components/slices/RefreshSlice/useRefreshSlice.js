import { useState } from "react";

export const FAILURE = "failure";
export const INITIAL = "initial";
export const LOADING = "loading";
export const SUCCESS = "success";

const status = {
  [FAILURE]: {
    message: "Oh no! Something went wrong. Check the console for logs.",
    key: FAILURE,
  },
  [INITIAL]: { message: "", key: INITIAL },
  [LOADING]: { message: "Firing off request...", key: LOADING },
  [SUCCESS]: {
    message: "Success! The website will refresh soon",
    key: SUCCESS,
  },
};

const url = process.env.GATSBY_NETLIFY_WEBHOOK;

export default function useRefreshSlice() {
  const [sentStatus, setSentStatus] = useState(INITIAL);

  return { deploy, sentStatus, status };

  async function deploy() {
    setSentStatus(LOADING);
    try {
      const res = await fetch(url, { method: "POST" });
      if (res.ok) setSentStatus(SUCCESS);
    } catch (e) {
      console.error(e);
      setSentStatus(FAILURE);
    }
  }
}

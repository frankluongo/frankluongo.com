import React, { useState } from "react";

import { Button } from "#components/Button";

const FAILURE = "failure";
const INITIAL = "initial";
const LOADING = "loading";
const SUCCESS = "success";

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

const RefreshPage = () => {
  const url = process.env.GATSBY_NETLIFY_WEBHOOK;
  const [sentStatus, setSentStatus] = useState(INITIAL);
  return (
    <section className="container container--blog page-body flex col gap:1">
      <h2>Congrats</h2>
      <p>You've made it to my refresh page.</p>
      <p>
        Clicking the button below will trigger a refresh of the content on my
        website.
      </p>
      <Button
        onClick={deploy}
        disabled={sentStatus !== INITIAL}
        data-theme="dark"
      >
        Trigger Refresh
      </Button>
      <div>{status[sentStatus].message}</div>
    </section>
  );

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
};

export default RefreshPage;

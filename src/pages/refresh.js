import React from "react";

import useRefreshHook from "#lib/Refresh/useRefreshHook";

const RefreshPage = () => {
  const { deploy, sentStatus, status, INITIAL } = useRefreshHook();
  return (
    <>
      <section className="container container--blog page-body flex col gap:1">
        <h2>Congrats</h2>
        <p>You've made it to my refresh page.</p>
        <p>
          Clicking the button below will trigger a refresh of the content on my
          website.
        </p>
        <button
          onClick={deploy}
          disabled={sentStatus !== INITIAL}
          data-theme="dark"
        >
          Trigger Refresh
        </button>
        <div>{status[sentStatus].message}</div>
      </section>
    </>
  );
};
export default RefreshPage;

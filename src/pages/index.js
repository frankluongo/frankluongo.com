import * as React from "react";

const TITLE = "Home Page | Frank Luongo Design Co.";

const IndexPage = () => {
  return (
    <>
      <h1 data-a11y-hidden>{TITLE}</h1>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>{TITLE}</title>;

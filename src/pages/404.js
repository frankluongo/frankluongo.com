import * as React from "react";
import { Link } from "gatsby";
const NotFoundPage = () => (
  <>
    <section className="container container--blog page-body flex col gap:3">
      <header>
        <h1>Page not found</h1>
      </header>
      <p>
        Sorry! The page you're looking for doesn't appear to exist... yet!
        <br />
        <Link className="link" to="/">
          Go home
        </Link>
        .
      </p>
    </section>
  </>
);
export default NotFoundPage;
export const Head = () => <title>Not found</title>;

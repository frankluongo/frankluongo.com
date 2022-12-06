import React from "react";

import { Link } from "gatsby";

import { useMeta } from "#lib/useMeta";
import { useNav } from "#lib/useNav";

import { Availability } from "#components/Availability";
import { Logo } from "#components/Logo";
import { Socials } from "./Socials";

import * as css from "./Footer.module.css";

export const Footer = () => {
  const meta = useMeta();
  const links = useNav();

  const year = new Date().getFullYear();

  return (
    <>
      <footer className={css.Footer}>
        <h2 data-a11y-hidden>Website Footer</h2>
        <section className="container block-gap:1">
          <header>
            <Logo type="alternate" />
          </header>
          <div className={css.GridThree}>
            <article className="block-gap:1">
              <p className="smaller">{meta.businessName.title}</p>
              <p className="smaller">{meta.businessLocation.title}</p>
            </article>
            <article className="block-gap:1">
              <p className="smaller">{meta.businessEmail.title}</p>
              <p className="smaller">{meta.businessPhone.title}</p>
            </article>
            <article>
              <Availability extraClasses="" />
            </article>
          </div>
          <header>
            <h3>Sitemap</h3>
          </header>
          <ul className="flex align-items:center gap:1">
            {links.map((link) => (
              <Link key={`${link.id}-footer`} to={link.slug}>
                {link.title}
              </Link>
            ))}
          </ul>
          <header>
            <h3>Connect</h3>
          </header>
          <Socials />
        </section>
      </footer>
      <section className={css.Copyright}>
        <div className="flex justify-center align-items:center" data-container>
          <small>&copy; {year} Frank Luongo Design Co., LLC</small>
        </div>
      </section>
    </>
  );
};

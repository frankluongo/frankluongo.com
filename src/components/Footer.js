import React from "react";

import { Link } from "gatsby";

import { useMeta } from "#lib/useMeta";
import { useNav } from "#lib/useNav";

import { Availability } from "#components/Availability";
import { Logo } from "#components/Logo";
import { Socials } from "./Socials";

import * as css from "#styles/components/Footer.module.css";

export const Footer = () => {
  const meta = useMeta();
  const links = useNav();

  const year = new Date().getFullYear();

  return (
    <>
      <footer className={css.Footer}>
        <h2 data-a11y-hidden>Website Footer</h2>
        <section className="container flex flex-direction:column gap:2">
          <header>
            <Logo type="alternate" />
          </header>
          <section className="grid gap:1 grid:cols-3">
            <article className="flex flex-direction:column gap:0.5">
              <p className="smaller">{meta.businessName.title}</p>
              <p className="smaller">{meta.businessLocation.title}</p>
            </article>
            <article className="flex flex-direction:column gap:0.5">
              <p className="smaller">{meta.businessEmail.title}</p>
              <p className="smaller">{meta.businessPhone.title}</p>
            </article>
            <article>
              <Availability extraClasses="" />
            </article>
          </section>
          <section className="flex flex-direction:column gap:0.5">
            <header>
              <h3>Sitemap</h3>
            </header>
            <ul className="flex align-items:center gap:1">
              {links.map((link) => (
                <li key={`${link.id}-footer`}>
                  <Link className="smaller" to={link.slug}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section className="flex flex-direction:column gap:0.5">
            <header>
              <h3>Connect</h3>
            </header>
            <Socials />
          </section>
        </section>
      </footer>
      <section className={css.Copyright}>
        <div
          className="flex justify-content:center align-items:center"
          data-container
        >
          <small>&copy; {year} Frank Luongo Design Co., LLC</small>
        </div>
      </section>
    </>
  );
};

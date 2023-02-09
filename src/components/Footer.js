import React from "react";

import { Link } from "gatsby";

import { useMeta } from "#lib/useMeta";
import { useNav } from "#lib/useNav";

import { Availability } from "#components/Availability";

import * as css from "#styles/components/Footer.module.css";
import { EmailMe } from "./EmailMe";

export const Footer = () => {
  const meta = useMeta();
  const links = useNav();

  const year = new Date().getFullYear();

  return (
    <>
      <footer className={`${css.Footer} padding-block:section`}>
        <div className="container gap grid grid:12">
          <header className="col:12 md:col:6 flex col gap:tight">
            <h2 className="h3">Frank Luongo Design Co.</h2>
            <p className="color:gray-2">
              Freelance Website developer based in Clarks Summit, PA and
              servicing the surrounding areas, as well as the entire United
              States.
            </p>
          </header>
          <section className="col:12 md:col:6 flex col gap:tight">
            <h2 className="h3">Get in touch</h2>
            <EmailMe className="color:gray-3 link" Tag="a">
              {meta.businessEmail.title}
            </EmailMe>
            <a
              href={`tel:+1${meta.businessPhone.title}`}
              className="color:gray-3 link"
            >
              {meta.businessPhone.title}
            </a>
            <div className="flex gap:tight">
              <EmailMe
                className="color:gray-3 link"
                title="Send me an email!"
                Tag="a"
              >
                ✉️ Email
              </EmailMe>
              <span>/</span>
              <a
                href="https://github.com/frankluongo"
                className="color:gray-3 link"
                title="Check out my GitHub"
              >
                🐙 GitHub
              </a>
              <span>/</span>
              <a
                href="https://www.instagram.com/_frankluongo/"
                className="color:gray-3 link"
                title="Check out my Instagram"
              >
                📷 Instagram
              </a>
            </div>
            <Availability extraClasses="" />
          </section>
          <section className="col:12 md:col:6 flex col gap:tight">
            <header>
              <h2 className="h3">Sitemap</h2>
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
        </div>
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

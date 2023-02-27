import React from "react";

import { useSocials } from "#lib/useSocials";

import * as css from "./Socials.module.css";

const Envelope = () => <>✉️</>;
const GitHub = () => <>🐙</>;
const Instagram = () => <>📷</>;

const Icons = {
  envelope: Envelope,
  github: GitHub,
  instagram: Instagram,
};

export const Socials = ({ type, ...props }) => {
  const socials = useSocials();

  return (
    <ul className={css.Socials} data-type={type} {...props}>
      {socials.map((social) => {
        const Icon = Icons[social.slug];
        return (
          <li key={social.id}>
            <a
              className={css.Social}
              href={social.URL}
              target="_blank"
              rel="noopener noreferrer"
              title={social.content}
            >
              <Icon />
              {type === "cards" && <span className="h6">{social.title}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

import Button from "#base/Button.styled";

import useHeader from "./useHeader";
import * as Styled from "./Header.styled";
import { useAudio } from "#lib/Audio";

export default function Header() {
  const links = useHeader();
  const { playStageSelect, playSwitch } = useAudio();

  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.Navigation>
          <Styled.NavList>
            {links.map(({ name, url }) => (
              <li key={url}>
                <Styled.NavLink
                  to={url}
                  onClick={playStageSelect}
                  onKeyUp={handleKeyup}
                  onMouseEnter={playSwitch}
                >
                  {name}
                </Styled.NavLink>
              </li>
            ))}
          </Styled.NavList>
        </Styled.Navigation>
        <Styled.NavList $gap="1rem">
          <li>
            <Button
              $size="small"
              as="a"
              href="//github.com/frankluongo"
              title="Check out my GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Button>
          </li>
          <li>
            <Button
              $size="small"
              as="a"
              href="mailto:frank@frankluongo.com"
              title="Send me an email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </Button>
          </li>
          <li>
            <Button
              $size="small"
              as="a"
              href="//www.instagram.com/frankluongodesignco/"
              title="Check out my Instagram!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Button>
          </li>
        </Styled.NavList>
      </Styled.Container>
    </Styled.Header>
  );

  function handleKeyup(e) {
    if (e.key !== "Tab") return;
    playSwitch();
  }
}

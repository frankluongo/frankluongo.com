import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { SOUNDS, useSound } from "#lib/Audio";
import { useSettings } from "#lib/Settings";

import Button from "#base/Button.styled";

import useHeader from "./useHeader";
import * as Styled from "./Header.styled";

export default function Header() {
  const { state } = useSettings();
  const switchAudio = useSound(SOUNDS.switch);
  const stageSelectAudio = useSound(SOUNDS.stageSelect);
  const links = useHeader();

  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.Navigation>
          <Styled.NavList>
            {links.map(({ name, url }) => (
              <li key={url}>
                <Styled.NavLink
                  to={url}
                  onClick={handleClick}
                  onKeyUp={handleKeyup}
                  onMouseEnter={handleMouseEnter}
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

  function handleClick() {
    stageSelectAudio();
  }

  function handleKeyup(e) {
    if (e.key !== "Tab") return;
    switchAudio();
  }

  function handleMouseEnter() {
    state.userInteracted && switchAudio();
  }
}

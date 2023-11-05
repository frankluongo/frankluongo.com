import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

import * as Styled from "./Footer.styled";
import LargeText from "#base/LargeText.styled";

export default function Footer() {
  return (
    <>
      <Styled.Footer>
        <Styled.Container>
          <Styled.Blurb>
            <h2>
              <strong>Frank Luongo</strong>{" "}
              <Styled.SkinnyText>Design Co.</Styled.SkinnyText>
            </h2>
            <LargeText $color="--color-text-alt">
              <strong>I&apos;m Frank Luongo</strong>, an experienced Software
              Developer and Graphic Designer with a comprehensive skill set
              encompassing cutting-edge software development and visually
              compelling graphic design to create transformative digital
              projects.
            </LargeText>
            <p>
              This website is built using{" "}
              <a
                className="alt"
                href="//www.gatsbyjs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gatsby Js
              </a>
              , hosted on{" "}
              <a
                className="alt"
                href="//www.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Netlify
              </a>{" "}
              and typeset in{" "}
              <a
                className="alt"
                href="//www.atipofoundry.com/fonts/silka"
                target="_blank"
                rel="noopener noreferrer"
              >
                Silka
              </a>{" "}
              by{" "}
              <a
                className="alt"
                href="//www.atipofoundry.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Atipo Foundry
              </a>
            </p>
          </Styled.Blurb>
          <Styled.Socials>
            <li>
              <Styled.Social
                href="//www.instagram.com/frankluongodesignco/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
                frankluongodesignco
              </Styled.Social>
            </li>
            <li>
              <Styled.Social
                href="mailto:frank@frankluongo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                frank@frankluongo.com
              </Styled.Social>
            </li>
            <li>
              <Styled.Social
                href="//github.com/frankluongo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
                frankluongo
              </Styled.Social>
            </li>
            <li>
              <Styled.Social
                href="mailto:frank@frankluongo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faSquareCheck} />
                Available for freelance
              </Styled.Social>
            </li>
          </Styled.Socials>
        </Styled.Container>
      </Styled.Footer>
      <Styled.Copyright>
        <Styled.Container>
          <small>
            <strong>
              &copy; {new Date().getFullYear()} Frank Luongo Design Co. LLC
            </strong>
          </small>
        </Styled.Container>
      </Styled.Copyright>
    </>
  );
}

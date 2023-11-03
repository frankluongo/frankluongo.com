import React from "react";

import Button from "#v6/components/base/Button.styled";
import src from "../../../../assets/videos/video-bg.mp4";

import * as Styled from "./VideoHero.styled";

export default function VideoHero() {
  return (
    <Styled.Wrapper>
      <Styled.Video loop muted autoPlay playsInline>
        <source src={src} type="video/mp4" />
      </Styled.Video>
      <Styled.Overlay />
      <Styled.TriangleBottom />
      <Styled.Container>
        <Styled.Heading>
          <small>Hey! I&apos;m Frank Luongo, a</small>
          <br />
          Freelance web developer and graphic designer
        </Styled.Heading>
        <Styled.Subheading>
          I design and build fast, accessible and SEO-friendly websites for
          companies, e-commerce stores, foundations and more
        </Styled.Subheading>
        <Button
          as="a"
          href="mailto:frank@frankluongo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's work together!
        </Button>
      </Styled.Container>
    </Styled.Wrapper>
  );
}

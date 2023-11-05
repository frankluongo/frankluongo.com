import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import LargeText from "#base/LargeText.styled";
import * as Styled from "./Hero.styled";

export default function Hero({ description, heading, image }) {
  return (
    <Styled.Hero>
      <Styled.Container>
        <Styled.Background>
          <GatsbyImage image={getImage(image)} alt="" />
        </Styled.Background>
        <Styled.Description>
          <Styled.Heading>{heading}</Styled.Heading>
          <LargeText $color="--color-secondary">{description}</LargeText>
        </Styled.Description>
      </Styled.Container>
    </Styled.Hero>
  );
}

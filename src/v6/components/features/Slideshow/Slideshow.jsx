import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as Styled from "./Slideshow.styled";
import useSlideshow from "./useSlideshow";

export default function Slideshow({ items }) {
  const { index, selectItem } = useSlideshow();
  const currentItem = items[index] || items[0];
  return (
    <Styled.Container>
      <Styled.Controls>
        {items.map((item, i) => (
          <Styled.Control
            key={`item-control-${i}`}
            onClick={() => selectItem(i)}
            $active={index === i}
            title={`Show review from ${item.author}`}
          />
        ))}
      </Styled.Controls>
      <Styled.Content>
        {currentItem.image && (
          <Styled.ContentImageWrapper>
            <GatsbyImage
              image={getImage(currentItem.image)}
              alt={currentItem.author}
            />
          </Styled.ContentImageWrapper>
        )}
        <Styled.ContentText>
          <blockquote>{currentItem.content}</blockquote>
          <Styled.ContentFooter>
            <cite>{currentItem.author}&nbsp;|</cite>
            <Styled.ContentLink
              href={currentItem.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {currentItem.source}
            </Styled.ContentLink>
          </Styled.ContentFooter>
        </Styled.ContentText>
      </Styled.Content>
    </Styled.Container>
  );
}

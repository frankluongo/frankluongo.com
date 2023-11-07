import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as Styled from "./Slideshow.styled";
import useSlideshow from "./useSlideshow";

export default function Slideshow({ items }) {
  const { clickCount, index, selectItem, updateClickCount } = useSlideshow();
  const currentItem = items[index] || items[0];

  const hasImage = !!currentItem.image;

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
        {hasImage && (
          <Styled.ContentImageWrapper onClick={updateClickCount}>
            <GatsbyImage image={getImageSource()} alt={currentItem.author} />
          </Styled.ContentImageWrapper>
        )}
        <Styled.ContentText>
          <blockquote>{currentItem.content}</blockquote>
          <Styled.ContentFooter>
            <Styled.Citation>{currentItem.author}&nbsp;</Styled.Citation>
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

  function getImageSource() {
    if (clickCount >= 3 && currentItem.easterEgg) {
      return getImage(currentItem.easterEgg);
    }
    return getImage(currentItem.image);
  }
}

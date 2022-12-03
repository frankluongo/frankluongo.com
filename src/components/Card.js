import React from "react";
import { Link } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useImages } from "#lib/useImages";

import * as css from "./Card.module.css";

export const Card = ({ previewImage, slug, thumbnailImage, title }) => {
  const images = useImages();
  const thumbnail = getImage(images[thumbnailImage]);
  const preview = getImage(images[previewImage]);
  return (
    <div className={css.Card}>
      <Link className={css.Link} to={`/projects/${slug}`}>
        <header className={css.Header} data-display="mediumUp">
          {thumbnailImage && (
            <GatsbyImage className={css.Logo} image={thumbnail} alt={title} />
          )}
          <small>{title}</small>
        </header>
        {previewImage && (
          <GatsbyImage className={css.Thumbnail} alt={title} image={preview} />
        )}
        <div className={css.Title}>
          {title}
          <ChevronRight className={css.Icon} />
        </div>
      </Link>
    </div>
  );
};

Card.defaultProps = {
  slug: "/",
  title: "this is the card title",
};

function ChevronRight(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
      <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
    </svg>
  );
}

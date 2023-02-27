import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { useImages } from "#lib/useImages";

import * as css from "./Image.module.css";

export const Image = ({ alt, path, ...props }) => {
  const imageData = useImages(path);
  const image = getImage(imageData);
  if (!path || !imageData) return null;
  return (
    <GatsbyImage className={css.Image} image={image} alt={alt} {...props} />
  );
};

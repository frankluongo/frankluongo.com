import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { useImages } from "#lib/useImages";

export const Image = ({ alt, path, ...props }) => {
  const imageData = useImages(path);
  const image = getImage(imageData);
  if (!path || !imageData) return null;
  return <GatsbyImage image={image} alt={alt} {...props} />;
};

import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useImages } from "#lib/useImages";

import * as css from "./Hero.module.css";

const defaultExtraStyles = {
  root: "",
  heroImage: "",
  heroContent: "",
};

export const Hero = ({ alt, children, extraStyles, path }) => {
  const imageData = useImages(path);
  const image = getImage(imageData);

  const extraCss = {
    ...defaultExtraStyles,
    ...extraStyles,
  };

  return (
    <section className={`${css.Hero} ${extraCss.root}`}>
      <figure className={`${css.HeroImage} ${extraCss.heroImage}`}>
        <GatsbyImage image={image} alt={alt} />
      </figure>
      <div
        className={`${css.HeroContent} ${extraCss.heroContent} container`}
        data-container
      >
        {children}
      </div>
    </section>
  );
};

Hero.defaultProps = {
  extraStyles: defaultExtraStyles,
};

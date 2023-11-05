import React from "react";
import useSeo from "./useSeo";

export default function Seo({ title, description, pathname, children }) {
  const meta = useSeo();
  const defaultTitle = meta.defaultMetaTitle.properties.content.value;
  const defaultDescription =
    meta.defaultMetaDescription.properties.content.value;
  const metaImage = meta.metaImage.properties.content.value;
  const siteUrl = meta.siteUrl.properties.content.value;
  const twitterUsername = meta.twitterUsername.properties.content.value;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${metaImage}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>Frank Luongo Design Co. | {seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {children}
    </>
  );
}

import * as React from "react";

import { useHome } from "#lib/useHome";
import { useMeta } from "#lib/useMeta";

import { Availability } from "../components/Availability";
import { Button } from "../components/Button";
import { Hero } from "../components/Hero";

const TITLE = "Home | Frank Luongo Design Co.";

const IndexPage = () => {
  const data = useHome();
  const { businessEmail } = useMeta();
  return (
    <>
      <h1 data-a11y-hidden>{TITLE}</h1>
      <Hero
        path={data.heroImage.properties.imagePath.value}
        alt="Home Page"
        extraStyles={{ heroContent: "color-white" }}
      >
        <h2>
          <strong>Oh, Hello!</strong> I'm Frank Luongo
        </h2>
        <p>{data.heroSubheading.title}</p>
        <Availability />
        <div>
          <Button href={`mailto:${businessEmail.title}`}>
            {businessEmail.title}
          </Button>
        </div>
      </Hero>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>{TITLE}</title>;

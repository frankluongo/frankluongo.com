import React from "react";

import Button from "#v6/components/base/Button.styled";

import * as Styled from "./Services.styled";
import useServices from "./useServices";

export default function Services() {
  const services = useServices();
  return (
    <Styled.Services>
      <Styled.Container>
        <Styled.Heading as="h2" $color="--color-primary">
          Services offered
        </Styled.Heading>
        <Styled.Grid>
          {services.map((service, i) => (
            <Styled.Service key={`service-${i}`}>
              <Styled.ServiceTitle>{service.title}</Styled.ServiceTitle>
              <p>{service.description}</p>
            </Styled.Service>
          ))}
          <Styled.CallToAction>
            <Button
              as="a"
              $variant="alternate"
              href="mailto:frank@frankluongo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              What can I build for ya?
            </Button>
          </Styled.CallToAction>
        </Styled.Grid>
      </Styled.Container>
    </Styled.Services>
  );
}

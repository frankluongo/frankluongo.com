import * as React from "react";

import Hero from "#features/Hero/Hero";
import ContactForm from "#features/ContactForm/ContactForm";

import useContactRoute from "./useContactRoute";

import * as Styled from "./ContactRoute.styled";

export default function ContactRoute() {
  const data = useContactRoute();
  return (
    <>
      <Hero
        image={data.image}
        heading="Get in touch with me!"
        description={`Want to get to know me a little better and get started on your project? Well, then, let's just jump into it!`}
      />
      <Styled.Container>
        <ContactForm />
      </Styled.Container>
    </>
  );
}

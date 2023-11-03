import React from "react";
import Hero from "#v6/components/features/Hero/Hero";
import ContactForm from "#v6/components/features/ContactForm/ContactForm";

import useContactSlice from "./useContactSlice";

import * as Styled from "./ContactSlice.styled";

export default function ContactSlice() {
  const data = useContactSlice();
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

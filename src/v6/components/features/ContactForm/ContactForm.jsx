import React from "react";
import Button from "#v6/components/base/Button.styled";
import useContactForm from "./useContactForm";
import * as Styled from "./ContactForm.styled";

export default function ContactForm() {
  const { result, submitForm } = useContactForm();
  return (
    <Styled.Wrapper>
      <h2>Get in touch</h2>
      <p>Fill out the form below to send me a message and I'll respond ASAP!</p>
      <Styled.Form name="contact" onSubmit={submitForm} data-netlify="true">
        <Styled.FormBlock>
          <label htmlFor="name">Name</label>
          <Styled.FormInput type="text" name="name" id="name" />
        </Styled.FormBlock>
        <Styled.FormBlock>
          <label htmlFor="email">Email</label>
          <Styled.FormInput type="email" name="email" id="email" />
        </Styled.FormBlock>
        <Styled.FormBlock>
          <label htmlFor="message">Message</label>
          <Styled.FormTextarea name="message" id="message" />
        </Styled.FormBlock>
        <Styled.FormBlock>
          <Button $variant="alternate" type="submit">
            Send
          </Button>
        </Styled.FormBlock>
      </Styled.Form>
      {result && <p>{result}</p>}
    </Styled.Wrapper>
  );
}

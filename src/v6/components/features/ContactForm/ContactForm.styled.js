import styled from "styled-components";

export const Form = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormInput = styled.input`
  min-height: 3rem;
  padding-inline: 0.5rem;

  border: 1px solid var(--color-border);
  border-radius: 0.25rem;
`;

export const FormTextarea = styled.textarea`
  min-height: 6rem;
  padding: 0.5rem;

  border: 1px solid var(--color-border);
  border-radius: 0.25rem;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 40rem;
  margin-inline: auto;
`;

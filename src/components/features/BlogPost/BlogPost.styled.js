import styled from "styled-components";

export const BlogPost = styled.article`
  & a {
    color: var(--theme-color-link-default);
    font-weight: 600;
    text-decoration: none;
  }

  & columnlist {
    --column: 18rem;

    align-items: center;
    display: grid;
    gap: 1rem;
    padding-block: 1rem;

    grid-template-columns: repeat(auto-fit, minmax(var(--column), 1fr));
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 0;
    padding-inline-start: 1.5rem;

    list-style: disc;
  }

  & * + h3,
  & * + h4 {
    margin-top: 1rem;
  }

  & :not(pre) code {
    display: inline-block;
    padding-block: 0;
    padding-inline: 0.25rem;

    color: var(--color-yellow);
    line-height: 1.2;

    background-color: var(--color-black);
    border-radius: 0.25rem;
  }

  & pre code {
    padding: 2rem;

    font-size: 1rem;
    line-height: 1.618;

    border-radius: var(--border-radius-default);
  }
`;

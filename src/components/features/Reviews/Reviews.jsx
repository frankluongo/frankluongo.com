import React from "react";

import Slideshow from "../Slideshow/Slideshow";

import useReviews from "./useReviews";
import * as Styled from "./Reviews.styled";

export default function Reviews() {
  const reviews = useReviews();
  return (
    <>
      <Styled.Reviews>
        <Styled.Container>
          <Styled.Heading as="h2" $color="--color-primary">
            Reviews and testimonials from past clients
          </Styled.Heading>
          <Slideshow items={reviews} />
        </Styled.Container>
        <Styled.Background
          viewBox="0 0 1280 213"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1017 -0.000319594C1338.6 -0.000291478 1493.67 137.333 1531 206L-429 213C-376 184.666 -191.8 128 121 128C512 128 615 -0.000354737 1017 -0.000319594Z"
            fill="#F5F5F5"
          />
        </Styled.Background>
      </Styled.Reviews>
    </>
  );
}

import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from './helpers/AnimationRevealPage'

import Hero from "./hero/TwoColumnWithFeaturesAndTestimonial";

const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
    </AnimationRevealPage>
  );
}

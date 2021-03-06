import React from "react";
import rehypeReact from "rehype-react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";

import Heading from "../components/UI/heading";
import {
  Contained,
  StyledSection,
  Wrapper
} from "../components/layout/elements";
import WordsFading from "../components/UI/wordsFading";
import HighlightedText from "../components/UI/HighlightedText";

import SocialLinks from "./SocialLinks";

const AboutText = styled.div`
  color: var(--text);
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 1.8;
  width: 85%;
  margin: 0 auto;
  text-align: center;
  transition: color 0.2s ease-out;

  & em {
    color: var(--text-highlight);
    font-weight: 600;
    transition: color 0.2s ease-out;
  }

  & a {
    text-decoration: underline;
    color: var(--text-highlight);
    font-weight: 600;
    transition: color 0.2s ease-out;

    &:hover {
      color: var(--primary);
    }
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 90%;
  }

  @media ${(props) => props.theme.mediaQueries.small} {
    font-size: 1.7rem;
    width: 95%;
  }

  @media ${(props) => props.theme.mediaQueries.smallest} {
    width: 100%;
  }
`;

const StackTitle = styled.h2`
  font-weight: 600;
  color: var(--text-highlight);
  margin-top: 5rem;
  font-size: 2rem;
  transition: color 0.2s ease-out;

  @media ${(props) => props.theme.mediaQueries.small} {
    font-size: 1.9rem;
  }

  @media ${(props) => props.theme.mediaQueries.smallest} {
    font-size: 1.8rem;
  }
`;

const Stack = styled.p`
  color: var(--primary);
  width: 75%;
  margin: 0 auto;
  text-transform: uppercase;
  margin-bottom: 5rem;
  font-size: 1.4rem;
  line-height: 1.8;
  font-weight: 700;

  @media ${(props) => props.theme.mediaQueries.small} {
    width: 90%;
    font-size: 1.3rem;
  }

  @media ${(props) => props.theme.mediaQueries.smallest} {
    font-size: 1.2rem;
  }
`;

const About = () => {
  return (
    <StyledSection id="about-me">
      <Contained>
        <Wrapper>
          <Zoom>
            <Heading
              title="About me"
              subtitle="If you’re <span>wondering</span> who <span>I am</span>…"
            />
          </Zoom>
          <Zoom>
            <AboutText>
              I’m <HighlightedText text="Darcy" />, a 29 years' old{" "}
              <HighlightedText text="developer" /> from Sydney, Australia. After
              my graduating from law school, I pursued a career in{" "}
              <HighlightedText text="corporate law" /> in London, UK. After two
              years as a lawyer, I felt stuck and decided to undertake a
              secondment to work with an NGO in providing technology solutions
              to implement off-grid solar energy in India. The opportunity
              exposed me to the <b>power of technology</b> to affect significant
              and positive change in the community. I decided that it was time
              for a change, so I started to{" "}
              <HighlightedText text="study JavaScript" /> before work and within
              four months I had left a career in law and was working as a{" "}
              <HighlightedText text="freelance developer" />.
              <br />
              <br />I have{" "}
              <HighlightedText text="several years of commercial developer experience" />
              ! Specifically, I have focused on{" "}
              <HighlightedText text="fullstack development" />.
              <br />
              <br />I am always seeking to{" "}
              <WordsFading words={["create", "build", "learn"]} /> more.
              <br />
              <br />
              Away from the desk, I enjoy surfing and stand-up comedy.
              <StackTitle>
                My current <HighlightedText text="current stack" /> is:
              </StackTitle>
              <Stack>
                JAVASCRIPT - TYPESCRIPT - HTML5 - CSS3 - REACTJS - PHP - SASS -
                WORDPRESS - DRUPAL - WEBPACK - STYLED COMPONENTS - AWS
                - MYSQL - BABEL - GRAPHQL - GATSBY - NEXTJS
              </Stack>
            </AboutText>
          </Zoom>
          <Zoom>
            <SocialLinks />
          </Zoom>
        </Wrapper>
      </Contained>
    </StyledSection>
  );
};

export default About;

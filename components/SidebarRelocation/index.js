import styled, { css } from 'styled-components';
import Link from 'next/link';
import TitleH4 from 'elements/TitleH4';
import Subtitle from 'elements/Subtitle';
import ArrowRight from 'public/icons/arrow-right.svg';
import RelocationText from 'public/backgrounds/relocation.svg';
import { useState } from 'react';

const H4 = styled(TitleH4)`
  margin-bottom: 30px;

  @media (max-width: 420px) {
    margin-bottom: 7px;
  }
`;

const Section = styled.section`
  text-align: left;
  width: 254px;
  max-width: 254px;
  overflow: visible;
  padding: 50px;
  margin: -50px;
  position: relative;

  @media (max-width: 1240px) {
    padding: 0;
    margin: 0;
    margin-top: 100px;
    margin-bottom: 90px;
  }
`;

const RelocationBackground = styled.div`
  position: absolute;
  top: 40px;
  left: 120px;
  max-width: 300px;
  max-height: 300px;
  z-index: -1;
  transform: translate(-50%, -50%);

  @media (max-width: 1240px) {
    top: 10px;
    left: 100px;
  }
  @media (max-width: 420px) {
    top: 40px;
    left: 100px;
  }

  svg {
    fill: #f7f8f9;
    stroke: #f7f8f9;
    width: 420px;
    height: 420px;
    @media (max-width: 1240px) {
      width: 380px;
      height: 380px;
    }
    @media (max-width: 420px) {
      width: 276px;
      height: 276px;
    }
  }

  ${props =>
    props.rotate === 1 &&
    css`
      svg {
        fill: #feb251;
        animation: 45s linear infinite rotation;

        path:last-child {
          fill: #feb251;
          stroke: #feb251;
        }
      }
    `}

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StyledArrow = styled.a`
  svg {
    fill: #ffffff;
  }
  svg,
  path {
    transition: all 0.3s ease;
  }

  &:hover svg {
    fill: #53b443;
    cursor: pointer;

    path:first-child {
      stroke: #53b443;
    }

    path:last-child {
      fill: #ffffff;
      stroke: #ffffff;
    }
  }

  &:active {
    color: #339722;
  }

  &:active svg {
    fill: #339722;

    path:first-child {
      stroke: #339722;
    }

    path:last-child {
      stroke: #ffffff;
      fill: #ffffff;
    }
  }
`;

const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 60px;

  @media (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

const SidebarRelocation = ({ title, subtitle, href }) => {
  const [rotate, setRotate] = useState(0);
  return (
    <Section
      onMouseEnter={() => setRotate(1)}
      onMouseLeave={() => setRotate(0)}
    >
      <H4>{title}</H4>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <Link href={href} passHref>
        <StyledArrow>
          <ArrowRight />
        </StyledArrow>
      </Link>
      <RelocationBackground rotate={rotate}>
        <RelocationText />
      </RelocationBackground>
    </Section>
  );
};

export default SidebarRelocation;

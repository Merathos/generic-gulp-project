import styled, { css } from 'styled-components';
import { TitleH4, Subtitle } from 'elements';

export const H4 = styled(TitleH4)`
  margin-bottom: 30px;

  @media screen and (max-width: 420px) {
    margin-bottom: 7px;
  }
`;

export const Section = styled.section`
  text-align: left;
  width: 254px;
  max-width: 254px;
  overflow: visible;
  padding: 50px;
  margin: -50px;
  position: relative;

  @media screen and (max-width: 1240px) {
    padding: 0;
    margin: 0;
    margin-top: 100px;
    margin-bottom: 100px !important;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 50px !important;
  }
`;

export const RelocationBackground = styled.div`
  position: absolute;
  top: -40px;
  left: 0;
  width: 340px;
  height: 340px;
  z-index: -1;
  background-image: url('/backgrounds/relocation.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  transform: rotate(90deg);
  animation: 45s linear infinite rotation;

  @media screen and (max-width: 1240px) {
    width: 300px;
    height: 300px;
    top: -85px;
    left: -20px;
  }

  @media screen and (max-width: 500px) {
    width: 260px;
    height: 260px;
    top: -85px;
    left: 20px;
  }

  ${(p) =>
    p.language &&
    css`
      top: -100px;
      left: -60px;
      width: 480px;
      height: 480px;
      background-image: url('/backgrounds/relocation-en.svg');

      @media screen and (max-width: 1240px) {
        width: 420px;
        height: 420px;
        top: -110px;
        left: -80px;
      }

      @media screen and (max-width: 500px) {
        width: 360px;
        height: 360x;
        top: -160px;
        left: -50px;
      }
    `}

  @keyframes rotation {
    0% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(450deg);
    }
  }
`;

export const StyledArrow = styled.a`
  svg {
    fill: #ffffff;
  }

  svg {
    path {
      transition: all 0.3s ease;

      :first-child {
        fill: white;
        stroke: #201f2a;
      }

      :last-child {
        fill: black;
        stroke: none;
      }
    }
  }

  &:hover {
    path:first-child {
      fill: #53b443;
      stroke: #53b443;
    }

    path:last-child {
      fill: #ffffff;
      stroke: #ffffff;
    }
  }

  &:active {
    path:first-child {
      fill: #339722;
      stroke: #339722;
    }

    path:last-child {
      stroke: #ffffff;
      fill: #ffffff;
    }
  }
`;

export const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 60px;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;
